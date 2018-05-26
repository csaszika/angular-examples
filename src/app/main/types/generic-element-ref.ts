import {ElementRef} from '@angular/core';

export interface GenericElementRef<T> extends ElementRef {
  nativeElement: T;
}
