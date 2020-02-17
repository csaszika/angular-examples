import {OnChanges, SimpleChange, SimpleChanges} from '@angular/core';

import {RequiredInOnChanges} from './required.decorator';

class TestComponent implements OnChanges {
  aNumber!: number;
  aText!: string;

  @RequiredInOnChanges(['aNumber'])
  ngOnChanges(changes: SimpleChanges = { 'aNumber': { previousValue: undefined, currentValue: 2, firstChange: false } as SimpleChange}): void {
    this.doSomething();
  }

  doSomething(): void {}
}

class TestComponentWithRequiredProps implements OnChanges {
  aNumber!: number;
  aText!: string;

  @RequiredInOnChanges(['aNumber', 'aText'])
  ngOnChanges(): void {
    this.doSomething(this);
  }

  doSomething(scope: any): void {}
}

const TEST_TEXT = 'foobar';
const TEST_NUMBER = 1234;

describe('@RequiredInOnChanges', () => {
  it('should not call method if required props are invalid', () => {
    const test = new TestComponent();

    spyOn(test, 'doSomething').and.callThrough();

    test.ngOnChanges();

    expect(test.doSomething).not.toHaveBeenCalled();
  });

  it('should call method with the right scope', () => {
    const test = new TestComponentWithRequiredProps();
    test.aText = TEST_TEXT;
    test.aNumber = TEST_NUMBER;

    spyOn(test, 'doSomething').and.callThrough();

    test.ngOnChanges();

    expect(test.doSomething).toHaveBeenCalledWith(test);
  });
});
