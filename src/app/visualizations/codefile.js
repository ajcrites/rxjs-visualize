/**
 * Parse out class contents. This is used by the visualization class files to
 * display the code that generates the Observable output. This is a JS file
 * using ES5ish because it is used by babel-plugin-preval which doesn't work
 * with TypeScript, `export ...` etc.
 */

const fs = require('fs');
module.exports = filename => {
  return fs.readFileSync(filename)
    .toString()
    .replace(/[\s\S]*export class[\s\S]*?{([\s\S]*)}/, '$1')
    .replace(/{/g, "{{ '{' }}")
    .replace(/\s+code.*[\n]*/, '');
};
