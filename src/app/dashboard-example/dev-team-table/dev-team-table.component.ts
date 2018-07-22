import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, PageEvent} from '@angular/material';
import {DevTeamTableDataSource} from './dev-team-table-datasource';
import {Store} from '@ngrx/store';
import {DevTeamState} from '../ngrx-feature-core/reducers/dev-team/dev-team';
import {selectAllDevTeamMembers} from '../ngrx-feature-core/reducers/dev-team/selectors';
import {datatableRowsAnim} from '../../app-main/animations/list.animations';
import {DevTeamMember} from '../types/dev-team';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'dev-team-table',
  templateUrl: './dev-team-table.component.html',
  styleUrls: ['./dev-team-table.component.scss'],
  animations: [datatableRowsAnim]
})
export class DevTeamTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DevTeamTableDataSource;

  displayedColumns = ['select', 'name', 'frontend', 'backend', 'teamwork'];

  selection: SelectionModel<DevTeamMember>;

  constructor(private store: Store<DevTeamState>) {}

  ngOnInit() {
    this.dataSource = new DevTeamTableDataSource(this.paginator, this.sort, []);
    this.store.select(selectAllDevTeamMembers).subscribe((members: DevTeamMember[]) => {
      this.dataSource = new DevTeamTableDataSource(this.paginator, this.sort, members);
    });

    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<DevTeamMember>(allowMultiSelect, initialSelection);

  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  onPageEvent(event: PageEvent) {
    console.log(event);
  }
}
