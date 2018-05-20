import {FormControl, FormGroup, Validators} from '@angular/forms';

export class JediForm extends FormGroup {

  constructor() {
    super({
      name: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
      saber: new FormControl('', Validators.required)
    });
  }

}
