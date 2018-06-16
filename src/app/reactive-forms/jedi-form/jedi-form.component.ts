import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {JediForm} from './jedi.form';
import {JediLevelSelect} from '../types/jedi.interfaces';

@Component({
  selector: 'jedi-form',
  templateUrl: './jedi-form.component.html',
  styleUrls: ['./jedi-form.component.scss']
})
export class JediFormComponent implements OnInit {

  jediFormGroup: FormGroup;
  readonly jediLevels: JediLevelSelect[] = [
    { level: 'Jedi Initiate', hint: 'So sweet' },
    { level: 'Padawan', hint: 'Want to learn?' },
    { level: 'Knight', hint: 'You think you know everything, don\'t you?' },
    { level: 'Master', hint: 'You know something' },
    { level: 'Master of the High Council', hint: 'It\'s a kind of manager, are you sure?' },
  ];
  readonly sabers = [
    'Red', 'Blue', 'Orange', 'Purple'
  ];

  constructor() { }

  ngOnInit() {
    this.jediFormGroup = new JediForm();
  }

  submitForm(jediFormGroup: FormGroup) {
    console.log(this.jediFormGroup);
  }
}
