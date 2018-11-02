import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DevTeamMemberForm} from './dev-team-member.form';
import {Observable} from 'rxjs';
import {debounceTime, filter} from 'rxjs/operators';

@Component({
  selector: 'dev-team-form',
  templateUrl: './dev-team-form.component.html',
  styleUrls: ['./dev-team-form.component.scss']
})
export class DevTeamFormComponent implements OnInit {

  @Output() anotherSubmit: EventEmitter<DevTeamMemberForm> = new EventEmitter<DevTeamMemberForm>();

  devFormGroup: FormGroup;

  ngOnInit() {
    this.devFormGroup = new DevTeamMemberForm();

    this.devFormGroup.valueChanges.pipe(
      debounceTime(500),
      filterByValidity(this.devFormGroup),
    ).subscribe((value) => {
      console.log(value);
    });
  }

  onSubmit(): void {
    this.anotherSubmit.emit(this.devFormGroup);
    this.devFormGroup.reset();
  }

}

export const filterByValidity = (form: FormGroup) =>
  (source: Observable<object>) => source.pipe(filter(() => form.valid));
