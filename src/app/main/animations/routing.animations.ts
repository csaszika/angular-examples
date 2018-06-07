import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [

    query(':enter, :leave',
      style({ position: 'fixed', width: '90%' })
      , { optional: true }),

    group([
      query(':enter', [
        style({ transform: 'translateX(90%)' }),
        animate('0.4s ease-in-out',
          style({ transform: 'translateX(0%)' })),

        query('@dashboardItemsAnim', [animateChild()], {optional: true})
      ], { optional: true }),

      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.4s ease-in-out',
          style({ transform: 'translateX(-90%)' }))
      ], { optional: true }),
    ])
  ])
]);
