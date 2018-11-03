import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DevTeamMemberForm} from './dev-team-member.form';
import {debounceTime} from 'rxjs/operators';
import {filterByFormValidity} from '../../../shared/custom-operators/form-validity.operator';
import {logger} from '../../../shared/custom-operators/logger.operator';

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
      logger(),
      filterByFormValidity(this.devFormGroup),
    ).subscribe();
  }

  onSubmit(): void {
    this.anotherSubmit.emit(this.devFormGroup);
    this.devFormGroup.reset();
  }

}
