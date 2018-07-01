import { AngularElementsModule } from './angular-elements.module';

describe('AngularElementsModule', () => {
  let angularElementsModule: AngularElementsModule;

  beforeEach(() => {
    angularElementsModule = new AngularElementsModule();
  });

  it('should create an instance', () => {
    expect(angularElementsModule).toBeTruthy();
  });
});
