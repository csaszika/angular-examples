import { NgTemplateOutletModule } from './ng-template-outlet.module';

describe('NgTemplateOutletModule', () => {
  let ngTemplateOutletModule: NgTemplateOutletModule;

  beforeEach(() => {
    ngTemplateOutletModule = new NgTemplateOutletModule();
  });

  it('should create an instance', () => {
    expect(ngTemplateOutletModule).toBeTruthy();
  });
});
