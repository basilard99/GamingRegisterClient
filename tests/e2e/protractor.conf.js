'use strict';

exports.config = {
    chromeDriver: '../../nw_support/chromedriver',
    directConnect: true,
    onPrepare: function setUp() {

        // By default, Protractor use data:text/html,<html></html> as resetUrl, but
        // location.replace (see http://git.io/tvdSIQ) from the data: to the file: protocol is not allowed
        // (we'll get ‘not allowed local resource’ error), so we replace resetUrl with one
        // with the file: protocol (this particular one will open system's root folder)
        browser.resetUrl = 'file://';

        // This isn't required and used to avoid ‘Cannot extract package’ error showed
        // before Protractor have redirected node-webkit to resetUrl.
        browser.driver.get('file://');

        //var SpecReporter = require('jasmine-spec-reporter');
        //jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
    },
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        //print: function() {}
    }
};
