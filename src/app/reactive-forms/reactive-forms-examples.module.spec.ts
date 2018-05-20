import { ReactiveFormsExamplesModule } from './reactive-forms-examples.module';

describe('ReactiveFormsExamplesModule', () => {
  let reactiveFormsExamplesModule: ReactiveFormsExamplesModule;

  beforeEach(() => {
    reactiveFormsExamplesModule = new ReactiveFormsExamplesModule();
  });

  it('should create an instance', () => {
    expect(reactiveFormsExamplesModule).toBeTruthy();
  });
});
