import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-angular-elements-container',
  templateUrl: './angular-elements-container.component.html',
  styleUrls: ['./angular-elements-container.component.scss']
})
export class AngularElementsContainerComponent implements OnInit {

  kbcard;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {

    this.kbcard = document.createElement('knowledge-base-card-element');

    // (kbcard as KnowledgeBaseCardComponent).name = 'Fuck yeah dynamic custom element!';
    (this.kbcard as any).name = 'Fuck yeah dynamic custom element!';

    this.elementRef.nativeElement.appendChild(this.kbcard);
  }

}
