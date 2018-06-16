import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DevTeamMemberForm} from './dev-team-member.form';
import {Store} from '@ngrx/store';
import {DevTeamState} from '../ngrx-feature-core/reducers/dev-team/dev-team';
import {AddDevTeamMember} from '../ngrx-feature-core/actions/dev-team/dev-team';
import {GenericElementRef} from '../../app-main/types/generic-element-ref';

@Component({
  selector: 'dev-team-form',
  templateUrl: './dev-team-form.component.html',
  styleUrls: ['./dev-team-form.component.scss']
})
export class DevTeamFormComponent implements OnInit {

  @ViewChild('devName') devName: GenericElementRef<HTMLInputElement>;

  devFormGroup: FormGroup;

  constructor(private store: Store<DevTeamState>) {
    this.devFormGroup = new DevTeamMemberForm();
  }

  ngOnInit() {
  }

  submitForm(devFormGroup: FormGroup): void {
    this.store.dispatch(new AddDevTeamMember({
      devTeamMember: {
        name: devFormGroup.controls.name.value,
        frontend: devFormGroup.controls.frontend.value,
        backend: devFormGroup.controls.backend.value,
        teamwork: devFormGroup.controls.teamwork.value
      }
    }));
    this.devName.nativeElement.focus();
    this.devFormGroup.reset();
  }

}
