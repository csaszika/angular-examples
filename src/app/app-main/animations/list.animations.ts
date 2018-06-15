import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';

const ENTER = ':enter';

export const dashboardItemsAnim = trigger('dashboardItemsAnim', [
  transition('* => *', [
    query(ENTER, style({opacity: 0}), {optional: true}),

    query(ENTER, stagger('300ms', [
      animate('1s ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-70px)', offset: 0}),
        style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
        style({opacity: 1, transform: 'translateY(0)', offset: 1})
      ]))
    ]))
  ])
]);

export const datatableRowsAnim = trigger('datatableRowsAnim', [
  transition('* => *', [
    query(ENTER, style({opacity: 0}), {optional: true}),

    query(ENTER, stagger('300ms', [
      animate('0.7s ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-70px)', offset: 0}),
        style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
        style({opacity: 1, transform: 'translateY(0)', offset: 1})
      ]))
    ]))
  ])
]);
