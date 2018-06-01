import { ChangeDetectionModule } from './change-detection.module';

describe('ChangeDetectionModule', () => {
  let changeDetectionModule: ChangeDetectionModule;

  beforeEach(() => {
    changeDetectionModule = new ChangeDetectionModule();
  });

  it('should create an instance', () => {
    expect(changeDetectionModule).toBeTruthy();
  });
});
