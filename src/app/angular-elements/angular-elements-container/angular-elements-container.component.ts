import {Component, ElementRef, Injector, OnInit} from '@angular/core';
import {KnowledgeBaseCardComponent} from '../knowledge-base-card/knowledge-base-card.component';
import {createCustomElement} from '@angular/elements';

@Component({
  selector: 'app-angular-elements-container',
  templateUrl: './angular-elements-container.component.html',
  styleUrls: ['./angular-elements-container.component.scss']
})
export class AngularElementsContainerComponent implements OnInit {

  // content: any;

  constructor(private elementRef: ElementRef,
              private injector: Injector) { }

  ngOnInit() {
    const element = createCustomElement(KnowledgeBaseCardComponent, {injector: this.injector});
    customElements.define('knowledge-base-card', element);

    const kbcard = document.createElement('knowledge-base-card');

    // (kbcard as KnowledgeBaseCardComponent).name = 'Fuck yeah dynamic custom element!';
    (kbcard as any).name = 'Fuck yeah dynamic custom element!';

    this.elementRef.nativeElement.appendChild(kbcard);
  }

}
