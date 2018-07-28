import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DevTeamMemberForm} from './dev-team-member.form';
import {Store} from '@ngrx/store';
import {DevTeamState} from '../ngrx-feature-core/reducers/dev-team/dev-team';
import {AddDevTeamMember} from '../ngrx-feature-core/actions/dev-team/dev-team';
import {GenericElementRef} from '../../app-main/types/generic-element-ref';
import {Observable} from 'rxjs';
import {debounceTime, filter, map} from 'rxjs/operators';

@Component({
  selector: 'dev-team-form',
  templateUrl: './dev-team-form.component.html',
  styleUrls: ['./dev-team-form.component.scss']
})
export class DevTeamFormComponent implements OnInit {

  @ViewChild('devName') devName: GenericElementRef<HTMLInputElement>;

  devFormGroup: FormGroup;

  constructor(private store: Store<DevTeamState>) {
  }

  ngOnInit() {
    this.devFormGroup = new DevTeamMemberForm();

    this.devFormGroup.valueChanges.pipe(
      debounceTime(500),
      filterByPropertyValid(this.devFormGroup.valid, this.devFormGroup, this.devFormGroup.controls.name.value),
      filterByValidity(this.devFormGroup),
      map(x => {
        console.log('after', x);
        console.log('after valid', this.devFormGroup.valid);
      })
    ).subscribe();
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

export const filterByValidity = (form: FormGroup) =>
  (source: Observable<object>) => source.pipe(filter(() => form.valid));

export const filterByPropertyValid = (validity: boolean, form: FormGroup, name: string) =>
  (source: Observable<object>) => source.pipe(filter(() => {
    console.log('prop', validity);
    console.log('form valid', form.valid);
    console.log('name', name);
    return form.valid;
  }));
