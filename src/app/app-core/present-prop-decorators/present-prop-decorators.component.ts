import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Required, RequiredInOnChanges, RequiredSimpleChanges} from '../../../shared/annotations/required.decorator';

@Component({
  selector: 'app-present-prop-decorators',
  templateUrl: './present-prop-decorators.component.html',
  styleUrls: ['./present-prop-decorators.component.scss']
})
export class PresentPropDecoratorsComponent implements OnInit, OnChanges {

  @Input() @Required requiredInput;
  @Input() requiredInOnChanges;
  // @Input() requiredInOnChanges2;

  constructor() { }

  ngOnInit() {
    // To avoid this kind of stuff, use @Required
    // if (this.requiredInput === undefined) {
    //   throw new Error(`requiredInput @Input() binding of PresentPropDecoratorsComponent is required`);
    // }
    console.log('no required error');
  }

  @RequiredInOnChanges(['requiredInOnChanges'])
  @RequiredSimpleChanges([])
  ngOnChanges(): void {
    console.log(this.requiredInput);
    console.log(this.requiredInOnChanges);
    // console.log(this.requiredInOnChanges2);
    // To avoid this kind of stuff, use @RequiredInOnChanges([...])
    // if (this.requiredInOnChanges === undefined || this.requiredInOnChanges2 === undefined) {
    //   return,
    // }
    console.log('requiredInOnChanges is provided, so I can run');
  }

}
