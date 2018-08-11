import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'dev-graph',
  templateUrl: './dev-graph.component.html',
  styleUrls: ['./dev-graph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevGraphComponent {

  @Input() devTeamFrontendAverage: number;
  @Input() devTeamBackendAverage: number;
  @Input() devTeamTeamworkAverage: number;

}
