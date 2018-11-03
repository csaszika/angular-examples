import { OnInit } from '@angular/core';

import { Required } from './required.decorator';

class TestComponent {
  @Required aNumber!: number;
  @Required aText!: string;
}

class TestComponentWithOwnOnInit implements OnInit {
  @Required aNumber!: number;
  @Required aText!: string;

  ngOnInit(): void {
    this.doSomething(this);
  }

  doSomething(scope: any): void {}
}

const TEST_TEXT = 'foobar';
const TEST_NUMBER = 1234;

describe('@Required', () => {
  it('should throw exception when required @Input binding not set', () => {
    const test = new TestComponent();
    test.aNumber = TEST_NUMBER;

    expect(() => (test as any).ngOnInit()).toThrowError('aText @Input() binding of TestComponent is required');
  });

  it('should call ngOnInit with the right scope', () => {
    const test = new TestComponentWithOwnOnInit();
    test.aText = TEST_TEXT;
    test.aNumber = TEST_NUMBER;

    spyOn(test, 'doSomething').and.callThrough();

    test.ngOnInit();

    expect(test.doSomething).toHaveBeenCalledWith(test);
  });
});
