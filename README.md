# RxjsVisualize

Showcase RxJS operators using RxJS operators.

Marble diagram visualizations are created for many of the
operators explained in the [RxJS operator](https://rxjs.dev/api/operators)
and [RxJS Observable Creators](https://rxjs.dev/api/index).

There are many other versions of this project and some are more advanced than
this one such as http://rxmarbles.com/

Most of the implementations use an interval (typically via `timer`) to display
the marble diagram and Observables working over time. It originally attempted to
somewhat mirror the visualizations from the original documentation (now Obsolete
although the new documentation should add these visualizations at some point)
and includes editorial comments from
[the author, @ajcrites](https://github.com/ajcrites).

This makes heavy use of Observable `timer` as a source observable. `take` was
also heavily used to limit the length of the source Observable and eventually
end the examples. Other variations of `skip` and `map` were used to manipulate
values for display purposes.

This was built using the Angular framework.

See [CONTRIBUTING.md](CONTRIBUTING.md) for information on development and adding
contributions and fixes.

## TODO
* [x] Build frame / menu to allow selection(s)
* [x] Allow restarting of diagram without requiring refresh
* [x] Include static operators (`Observable`) -- now Observable Creators.
* [ ] Include versions with other arguments
* [ ] Allow users to manipulate arguments
* [x] Support HMR
* [ ] Stackblitz support
