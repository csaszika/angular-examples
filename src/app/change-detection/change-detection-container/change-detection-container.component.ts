import {AfterViewChecked, Component, ViewChild} from '@angular/core';
import {DefaultChangeDetectionComponent} from '../sub-modules/default-change-detection';
import {OnPushChangeDetectionComponent} from '../sub-modules/on-push-change-detection';
import {OnPushChangeDetectionObservablesComponent} from '../sub-modules/on-push-change-detection-observables';
import {ManualChangeDetectionComponent} from '../sub-modules/manual-change-detection';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-change-detection-container',
  templateUrl: './change-detection-container.component.html',
  styleUrls: ['./change-detection-container.component.css']
})
export class ChangeDetectionContainerComponent implements AfterViewChecked {

  @ViewChild(DefaultChangeDetectionComponent) defaultChangeDetectionCmp: DefaultChangeDetectionComponent;
  @ViewChild(OnPushChangeDetectionComponent) onPushChangeDetectionCmp: OnPushChangeDetectionComponent;
  @ViewChild(OnPushChangeDetectionObservablesComponent) onPushChangeDetectionObservablesCmp: OnPushChangeDetectionObservablesComponent;
  @ViewChild(ManualChangeDetectionComponent) manualChangeDetectionCmp: ManualChangeDetectionComponent;

  notifier: Subject<any> = new Subject();

  ngAfterViewChecked() {
    if (this.defaultChangeDetectionCmp) {
      this.defaultChangeDetectionCmp.notifier = this.notifier;
    }

    if (this.onPushChangeDetectionCmp) {
      this.onPushChangeDetectionCmp.notifier = this.notifier;
    }

    if (this.onPushChangeDetectionObservablesCmp) {
      this.onPushChangeDetectionObservablesCmp.notifier = this.notifier;
    }

    if (this.manualChangeDetectionCmp) {
      this.manualChangeDetectionCmp.notifier = this.notifier;
    }
  }

}
