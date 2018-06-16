import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {DevTeamState} from '../ngrx-feature-core/reducers/dev-team/dev-team';
import {
  selectAllDevTeamMembers,
  selectDevTeamMemberEntities,
  selectDevTeamMemberIds,
  selectDevTeamMemberTotal
} from '../ngrx-feature-core/reducers/dev-team/selectors';
import {dashboardItemsAnim} from '../../app-main/animations/list.animations';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss'],
  animations: [dashboardItemsAnim]
})
export class DashboardContainerComponent implements OnInit {

  cards = [
    {title: 'Dev Team member', cols: 1, rows: 1},
    {title: 'Dev Team members', cols: 1, rows: 3},
    {title: 'Dev Graph', cols: 1, rows: 2}
  ];

  constructor(private store: Store<DevTeamState>) {}

  ngOnInit(): void {
    // this.store.select(selectAllDevTeamMembers)
    //   .subscribe(x => console.log('all: ', x));
    //
    // this.store.select(selectDevTeamMemberTotal)
    //   .subscribe(x => console.log('total: ' + x));
    //
    // this.store.select(selectDevTeamMemberIds)
    //   .subscribe(x => console.log('ids: ' + x));
    //
    // this.store.select(selectDevTeamMemberEntities)
    //   .subscribe(x => console.log('entities: ', x));
  }


  onAnimStart() {
    console.log('start');
  }
}
