import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'knowledge-base-card',
  templateUrl: './knowledge-base-card.component.html',
  styleUrls: ['./knowledge-base-card.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
// extends HTMLElement is not working 20180701 :(
export class KnowledgeBaseCardComponent {

  @Input() name: string;

}
