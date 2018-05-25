import {FormControl, FormGroup, Validators} from '@angular/forms';

export class DevTeamMemberForm extends FormGroup {

  constructor() {
    super({
      name: new FormControl('', [
        Validators.required, Validators.maxLength(10)
      ]),
      frontend: new FormControl('', [
        Validators.required, Validators.pattern('[0-9]+$'), Validators.max(10)
      ]),
      backend: new FormControl('', [
        Validators.required, Validators.pattern('[0-9]+$'), Validators.max(10)
      ]),
      teamwork: new FormControl('', [
        Validators.required, Validators.pattern('[0-9]+$'), Validators.max(10)
      ])
    });
  }

}
