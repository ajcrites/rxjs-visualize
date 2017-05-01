import { trigger, state, transition, style, animate } from '@angular/animations';

export const animations = [
  trigger('appear', [
    state('in', style({
      transform: 'scale(1)',
      opacity: 1,
    })),
    transition('void => *', [
      style({
        transform: 'scale(0.2)',
        opacity: 0.2,
      }),
      animate(100),
      style({
        transform: 'scale(1.5)',
      }),
      animate(100),
    ]),
  ])
];
