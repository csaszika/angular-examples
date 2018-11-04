exports.config = {
  allScriptsTimeout: 11000,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    './cucumber/*.feature'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  cucumberOpts: {
    require: [
      './src/step_definitions/**/*.steps.ts'
    ],
  },
  strict: true,
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
  }
};
