const sonarqubeScanner = require('sonarqube-scanner');


sonarqubeScanner({
    serverUrl: 'http://localhost:9000',
    options: {
        'sonar.login': 'admin', // Replace admin with your SonarQube username
        'sonar.password': 'admin!', // Replace admin with your SonarQube password
        'sonar.sources': 'src',
        'sonar.tests': 'src',
        'sonar.inclusions': '**', // Entry point of your code
        'sonar.test.inclusions': 'src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx',
        'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
        'sonar.testExecutionReportPaths': 'coverage/test-reporter.xml'
    }
}, () => {});
