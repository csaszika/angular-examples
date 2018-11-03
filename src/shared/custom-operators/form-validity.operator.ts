import {AbstractControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

export const filterByFormValidity = (form: AbstractControl) => (source: Observable<object>) => source.pipe(
    filter(() => form.valid)
);
