import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export const logger = () => (source: Observable<object>) => source.pipe(
  tap((data: any) => console.log(data))
);
