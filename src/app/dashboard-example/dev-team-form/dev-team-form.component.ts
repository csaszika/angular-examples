import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DevTeamMemberForm} from './dev-team-member.form';
import {Store} from '@ngrx/store';
import {DevTeamState} from '../ngrx-feature-core/reducers/dev-team/dev-team';
import {AddDevTeamMember} from '../ngrx-feature-core/actions/dev-team/dev-team';

@Component({
  selector: 'app-dev-team-form',
  templateUrl: './dev-team-form.component.html',
  styleUrls: ['./dev-team-form.component.css']
})
export class DevTeamFormComponent implements OnInit {

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
  }

}
