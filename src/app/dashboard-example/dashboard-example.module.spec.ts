import { DashboardExampleModule } from './dashboard-example.module';

describe('DashboardExampleModule', () => {
  let ngrxDashboardModule: DashboardExampleModule;

  beforeEach(() => {
    ngrxDashboardModule = new DashboardExampleModule();
  });

  it('should create an instance', () => {
    expect(ngrxDashboardModule).toBeTruthy();
  });
});
