import { NgrxDashboardModule } from './ngrx-dashboard.module';

describe('NgrxDashboardModule', () => {
  let ngrxDashboardModule: NgrxDashboardModule;

  beforeEach(() => {
    ngrxDashboardModule = new NgrxDashboardModule();
  });

  it('should create an instance', () => {
    expect(ngrxDashboardModule).toBeTruthy();
  });
});
