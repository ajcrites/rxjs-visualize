This project is open to contributions from everyone. You should offer your
contributions according to this document. If your contribution doesn't meet the
guidelines here, I'll try to point you in the right direction so you can correct
it before we integrate it.

## Development
In order to develop the project locally, follow these steps:

1. Clone the repository
2. `yarn (install)`
3. `yarn build-lib`
  * The app has a dependency on this local library. You must build it first
    before the application will run.

You can now run the project locally. Use `yarn ng serve` in order to start up
a local server on `localhost:4200` that hosts the project and live reloads.

You can also use HMR: `yarn ng serve --hmr -c=hmr`.

If you want to make changes to the rxjs-visualize-marble project, you will
have to rebuild it each time which you can do via `yarn build-lib`. If you
don't need changes to the styles, you can also build this project with a
watcher as in `yarn ng build rxjs-visualize-marble --watch`. If you're making
style changes, copy the `project/rxjs-visualize-marble/style.css` styles over
as needed too.

## Coding Style Guidelines
All coding style should be handled by [`prettier`](https://github.com/prettier/prettier).
You can run prettier yourself, but it also runs automatically on commit.

```sh
yarn prettier --write --parser typescript --single-quote --trailing-comma all <files>
```

TSLint handles other rules and should tell you if there's something you need to
correct that can't be fixed automatically.

## Commit Message Guidelines
Commit messages use the [conventional commit message](https://www.conventionalcommits.org/en/v1.0.0-beta.3/)
standard. Commit messages should look like:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
```

`<type>` and `<subject>` are required, but the scope and body are optional
depending upon the changes.

Any line of the commit message should be fewer than 100 characters.

We don't have a strong definition for scopes for commit messages, so just go
with what has been used in the past and makes the most sense to you.

For commit message subjects:
* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end
