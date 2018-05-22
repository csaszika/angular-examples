import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {DevTeamState} from '../ngrx-feature-core/reducers/dev-team/dev-team';
import {
  selectAllDevTeamMembers,
  selectDevTeamMemberEntities,
  selectDevTeamMemberIds,
  selectDevTeamMemberTotal
} from '../ngrx-feature-core/reducers/dev-team/selectors';
import {DashboardElement} from '../types/dev-team';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards = [
    { title: 'Card 1', cols: 1, rows: 2 },
    { title: 'Card 2', cols: 1, rows: 3 },
    { title: 'Card 3', cols: 1, rows: 1}
  ];

  constructor(private store: Store<DevTeamState>) {}

  ngOnInit(): void {
    this.store.select(selectAllDevTeamMembers)
      .subscribe(x => console.log('all: ' + x));

    this.store.select(selectDevTeamMemberTotal)
      .subscribe(x => console.log('total: ' + x));

    this.store.select(selectDevTeamMemberIds)
      .subscribe(x => console.log('ids: ' + x));

    this.store.select(selectDevTeamMemberEntities)
      .subscribe(x => console.log('entities: ', x));
  }


}
