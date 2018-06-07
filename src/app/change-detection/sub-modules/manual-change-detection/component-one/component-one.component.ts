// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {AfterViewChecked, Component, ElementRef, Input, NgZone} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {toggleClass} from '../../../services/toggle-class/toggle-class.service';

@Component({
    selector: 'cmp-one',
    template: `
        <button mat-raised-button color="accent">Cmp1</button>

        <ul>
            <li>
                <cmp-two [notifier]="notifier"></cmp-two>
            </li>
            <li>
                <cmp-three></cmp-three>
            </li>
        </ul>
    `
})
export class ComponentOne implements AfterViewChecked {

    @Input() notifier: Subject<any>;

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngAfterViewChecked() {
        toggleClass(this.el, this.zone);
    }

}
