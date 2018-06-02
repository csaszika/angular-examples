import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {DevTeamState} from '../ngrx-feature-core/reducers/dev-team/dev-team';
import {Observable} from 'rxjs/Observable';
import {map, scan} from 'rxjs/operators';
import {DevTeamMember} from '../types/dev-team';
import {
  selectAllDevTeamMembers,
  selectDevTeamBackendAverage,
  selectDevTeamFrontendAverage, selectDevTeamTeamworkAverage
} from '../ngrx-feature-core/reducers/dev-team/selectors';
// import { Chart } from 'chart.js';

@Component({
  selector: 'dev-graph',
  templateUrl: './dev-graph.component.html',
  styleUrls: ['./dev-graph.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevGraphComponent implements OnInit {

  // @ViewChild('chart') chart: GenericElementRef<HTMLCanvasElement>;

  devTeamMembers$: Observable<DevTeamMember[]>;
  devTeamFrontendAverage$: Observable<number>;
  devTeamBackendAverage$: Observable<number>;
  devTeamTeamworkAverage$: Observable<number>;
  // teamChart: any;

  constructor(private store: Store<DevTeamState>) {
    // this.devTeamFrontendAverage$ = store.select(selectAllDevTeamMembers)
    //   .pipe(
    //     scan((acc: number[], members: DevTeamMember[]) => {
    //       acc = [];
    //       for (const member of members) {
    //         acc.push(+member.frontend);
    //       }
    //       return acc;
    //     }, []),
    //     map((frontendPoints: number[]) => {
    //       return frontendPoints.reduce((acc, curr) => acc + curr, 0) / frontendPoints.length;
    //     }));
    this.devTeamFrontendAverage$ = store.select(selectDevTeamFrontendAverage);
    this.devTeamBackendAverage$ = store.select(selectDevTeamBackendAverage);
    this.devTeamTeamworkAverage$ = store.select(selectDevTeamTeamworkAverage);
  }

  ngOnInit() {
    // const context = this.chart.nativeElement.getContext('2d');
    // this.teamChart = new Chart(context, {
    //   type: 'bar',
    //   options: options,
    //   data: {
    //     labels: ['Frontend', 'Backend', 'Teamwork'],
    //     datasets: [{
    //       label: 'Team average',
    //       backgroundColor: 'rgb(255,0,0)',
    //       borderColor: 'black',
    //       borderWidth: 2,
    //       data: [
    //         2, 3, 4
    //       ]
    //     }]
    //   }
    // });
  }

}
