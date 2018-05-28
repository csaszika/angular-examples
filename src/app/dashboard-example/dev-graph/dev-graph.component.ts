import {Component, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {DevTeamState} from '../ngrx-feature-core/reducers/dev-team/dev-team';
import {Observable} from 'rxjs/Observable';
import {DevTeamMember} from '../types/dev-team';
import {selectAllDevTeamMembers} from '../ngrx-feature-core/reducers/dev-team/selectors';
import {GenericElementRef} from '../../main/types/generic-element-ref';
import {options} from './dev-graph.config';
import { Chart } from 'chart.js';

@Component({
  selector: 'dev-graph',
  templateUrl: './dev-graph.component.html',
  styleUrls: ['./dev-graph.component.css']
})
export class DevGraphComponent implements OnInit {

  @ViewChild('chart') chart: GenericElementRef<HTMLCanvasElement>;

  devTeamMembers$: Observable<DevTeamMember[]>;
  teamChart: any;

  constructor(private store: Store<DevTeamState>) {
    this.devTeamMembers$ = store.select(selectAllDevTeamMembers);
  }

  ngOnInit() {
    const context = this.chart.nativeElement.getContext('2d');
    this.teamChart = new Chart(context, {
      type: 'bar',
      options: options,
      data: {
        labels: ['Frontend', 'Backend', 'Teamwork'],
        datasets: [{
          label: 'Team average',
          backgroundColor: 'rgb(255,0,0)',
          borderColor: 'black',
          borderWidth: 2,
          data: [
            2, 3, 4
          ]
        }]
      }
    });
  }

}
