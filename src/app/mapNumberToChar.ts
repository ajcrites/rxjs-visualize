import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

/**
 * Takes a number and maps it to a corresponding alphabetic character from
 * a character code -- specifically 97 + the number.
 * For example: of(0, 1, 2).pipe(mapNumberToChar()) will emit ('a', 'b', 'c')
 */
export const mapNumberToChar = () => <T>(source: Observable<number>) =>
  source.pipe(map(val => String.fromCharCode(val + 97)));
