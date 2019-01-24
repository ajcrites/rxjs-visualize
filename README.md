# RxjsVisualize

Showcase RxJS operators using RxJS operators.

Marble diagram visualizations are created for many of the
operators explained in the [RxJS operator](https://rxjs.dev/api/operators)
documentation.

There are many other versions of this project and some are more advanced than
this one such as http://rxmarbles.com/

Most of the implementations use an interval to display the marble diagram and
Observables working over time. It attempts to somewhat mirror the visualizations
from the original documentation and includes editorial comments from
[the author, @ajcrites](https://github.com/ajcrites).  Some operators that are
not well documented by the RxJS docs themselves.

This makes heavy use of Observable `interval` as a source observable. `take` was
also heavily used to limit the length of the source Observable and eventually
end the examples. Other variations of `skip` and `map` were used to manipulate
values for display purposes.

This was built using the Angular framework.

## TODO
* [x] Build frame / menu to allow selection(s)
* [x] Allow restarting of diagram without requiring refresh
* [ ] Include static operators (`Observable`)
* [ ] Include versions with other arguments
* [ ] Allow users to manipulate arguments
* [ ] Support HMR
