import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-angular-elements-container',
  templateUrl: './angular-elements-container.component.html',
  styleUrls: ['./angular-elements-container.component.scss']
})
export class AngularElementsContainerComponent implements OnInit {

  @ViewChild('cardsContainer') container: ElementRef;

  ngOnInit() {

    const kbcard = document.createElement('knowledge-base-card-element');
    const kbcard2 = document.createElement('knowledge-base-card-element');
    const kbcard3 = document.createElement('knowledge-base-card-element');

    // (kbcard as KnowledgeBaseCardComponent).name = 'Fuck yeah dynamic custom element!';
    (kbcard as any).title = 'Fuck yeah dynamic custom element!';
    (kbcard2 as any).title = 'Doggy';
    (kbcard3 as any).title = 'Future';
    (kbcard as any).description = 'First dynamic custom element';
    (kbcard2 as any).description = 'Kind of dog what is so cute.';
    (kbcard3 as any).description = 'If bugs are fixed I will continue working on this module :)';

    this.container.nativeElement.appendChild(kbcard);
    this.container.nativeElement.appendChild(kbcard2);
    this.container.nativeElement.appendChild(kbcard3);
  }

}
