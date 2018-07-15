import { NgComponentOutletModule } from './ng-component-outlet.module';

describe('NgComponentOutletModule', () => {
  let ngComponentOutletModule: NgComponentOutletModule;

  beforeEach(() => {
    ngComponentOutletModule = new NgComponentOutletModule();
  });

  it('should create an instance', () => {
    expect(ngComponentOutletModule).toBeTruthy();
  });
});
