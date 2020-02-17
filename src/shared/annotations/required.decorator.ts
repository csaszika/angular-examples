import {SimpleChange, SimpleChanges} from '@angular/core';
/**
 * This decorator should throw an error if the value is undefined in OnInit lifecycle
 */
// tslint:disable-next-line:only-arrow-functions
export function Required(target: any, property: string | symbol): void {
  const { constructor } = target;

  constructor.__requiredProps = [...(constructor.__requiredProps || []), property];
  // console.log(constructor.__requiredProps);

  if (constructor.__ngOnInitRequiredPropsPatched) {
    return;
  }

  const originalOnInit = target.ngOnInit;

  target.ngOnInit = function ngOnInit(): void {
    for (const key of constructor.__requiredProps) {
      if (this[key] === undefined) {
        throw new Error(`${key} @Input() binding of ${target.constructor.name} is required`);
      }
    }

    if (originalOnInit) {
      originalOnInit.call(this);
    }
  };

  constructor.__ngOnInitRequiredPropsPatched = true;
}

/**
 * This decorator should prevent run ngOnChanges if @listOfRequiredFields has an item
 * which value is undefined.
 */
export function RequiredInOnChanges(listOfRequiredFields: string[] | symbol[] | null | undefined): MethodDecorator {
  if (listOfRequiredFields && listOfRequiredFields.length < 1) {
    return;
  }

  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const { constructor } = target;

    for (const property of listOfRequiredFields) {
      constructor.__requiredInOnchangesProps = [...(constructor.__requiredInOnchangesProps || []), property];
    }

    const originalMethod = descriptor.value;

    descriptor.value =  function (...args: any[]) {

      let requiredPropsAreValid = true;
      for (const prop of constructor.__requiredInOnchangesProps) {
        // OR null value too?
        if (this[prop] === undefined) {
          requiredPropsAreValid = false;
          break;
        }
      }

      if (requiredPropsAreValid) {
        return  originalMethod.apply(this, args);
      }

      return () => {};
    };

    return descriptor;
  };
}

/**
 * This decorator should prevent run ngOnChanges if @listOfRequiredChanges has an item
 * which value is undefined or its @currentValue is undefined.
 *
 * Improvement opportunities:
 * 1. RequiredSimpleChanges.ALL -> avoid to write every changes into an array
 */
export function RequiredSimpleChanges(listOfRequiredChanges: string[] | null | undefined): MethodDecorator {
  if (listOfRequiredChanges && listOfRequiredChanges.length < 1) {
    return;
  }
  return function (target: any, functionName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value =  function (...args: any) {

      let areChangesValid = true;
      for (const [key, change] of Object.entries(args[0])) {
        const currentChange = change as SimpleChange;
        // OR null value too?
        if (currentChange === undefined || currentChange.currentValue === undefined && listOfRequiredChanges.indexOf(key)) {
          areChangesValid = false;
          break;
        }
      }

      if (areChangesValid) {
        return  originalMethod.apply(this, args);
      }

      return () => {};
    };

    return descriptor;
  };
}
