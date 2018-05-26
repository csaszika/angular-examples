import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {DevTeamState} from '../ngrx-feature-core/reducers/dev-team/dev-team';
import {Observable} from 'rxjs/Observable';
import {DevTeamMember} from '../types/dev-team';
import {selectAllDevTeamMembers, selectDevTeamMemberEntities} from '../ngrx-feature-core/reducers/dev-team/selectors';

@Component({
  selector: 'dev-graph',
  templateUrl: './dev-graph.component.html',
  styleUrls: ['./dev-graph.component.css']
})
export class DevGraphComponent implements OnInit {

  devTeamMembers$: Observable<DevTeamMember[]>;

  constructor(private store: Store<DevTeamState>) {
    this.devTeamMembers$ = store.select(selectAllDevTeamMembers);
  }

  ngOnInit() {
  }

}
