module.exports = {
  default: {
    paths: ['src/tests/features/**/*.feature'],
    require: ['src/tests/step-definitions/**/*.ts'], // all step files
    requireModule: ['ts-node/register'],           // run TypeScript directly
    format: [
      'progress-bar',
      'summary',
      'json:reports/cucumber-report.json',
      'html:reports/cucumber-report.html'
    ],
    formatOptions: {
      colorsEnabled: true,
      snippetInterface: 'async-await'
    },
    dryRun: false
  }
};
