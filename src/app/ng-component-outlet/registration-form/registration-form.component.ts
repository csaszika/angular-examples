import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  formGroup: FormGroup;
  // formSubject: Subject<FormGroup> = new Subject<FormGroup>();

  submitForm(): void {
    // this.formSubject.next(this.formGroup);
    console.log('form', this.formGroup);
  }

  // listenFormChanges(): Observable<FormGroup> {
  //   return this.formSubject.asObservable();
  // }

  constructor() {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

}
