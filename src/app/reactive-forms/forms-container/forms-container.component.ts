import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-forms-container',
  templateUrl: './forms-container.component.html',
  styleUrls: ['./forms-container.component.scss']
})
export class FormsContainerComponent implements OnInit {

  selected: string;

  readonly JEDI = 'jedi';
  readonly SITH = 'sith';

  constructor() { }

  ngOnInit() {
    this.selected = this.JEDI;
  }

  setSelected(newSelection: string) {
    this.selected = newSelection;
  }
}
