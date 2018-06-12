import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {DevTeamTableDataSource} from './dev-team-table-datasource';
import {Store} from '@ngrx/store';
import {DevTeamState} from '../ngrx-feature-core/reducers/dev-team/dev-team';
import {selectAllDevTeamMembers} from '../ngrx-feature-core/reducers/dev-team/selectors';
import {datatableRowsAnim} from '../../main/animations/list.animations';
import {DevTeamMember} from '../types/dev-team';

@Component({
  selector: 'dev-team-table',
  templateUrl: './dev-team-table.component.html',
  styleUrls: ['./dev-team-table.component.css'],
  animations: [datatableRowsAnim]
})
export class DevTeamTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DevTeamTableDataSource;

  displayedColumns = ['name', 'frontend', 'backend', 'teamwork'];
  columnToTitle: Map<string, string> = new Map<string, string>()
    .set('name', 'Name')
    .set('frontend', 'Frontend')
    .set('backend', 'Backend')
    .set('teamwork', 'Teamwork');

  constructor(private store: Store<DevTeamState>) {
  }

  ngOnInit() {
    this.dataSource = new DevTeamTableDataSource(this.paginator, this.sort, []);
    this.store.select(selectAllDevTeamMembers).subscribe((members: DevTeamMember[]) => {
      this.dataSource = new DevTeamTableDataSource(this.paginator, this.sort, members);
    });

  }
}
