'use strict';

describe('The \'Add Publisher\' page will behave as follows - ', function addPublisherTestSuite() {

    // Replace backslashes with forward slashes. On a Windows machine
    // this will convert to a url style. If not, then it won't do
    // anything. (I think)
    var parts = __dirname.replace(/\\/g, '/').split('/');

    // Now that we have the parts, put them back together
    var localPath = 'file:///';
    for (var i = 0; i < parts.length - 3; i++) {
        localPath = localPath + parts[i] +'/';
    }

    beforeEach(function setUp() {
        browser.driver.get(localPath + '/index.html#/addPublisher');
    });

    describe('When the Add button is clicked -', function addButtonTests() {

        it('will send the publisher to the service', function sendPublisherDataTest() {

            element(by.id('publisherName')).sendKeys('Fantasy Flight Games');
            element(by.id('publisherUrl')).sendKeys('http://www.ffg.com');
            element(by.id('publisherCode')).sendKeys('FFG');
            element(by.id('publisherDescription')).sendKeys('Owned by Asmodee');

            var button = element(by.id('addPublisherButton'));
            button.click();

            var status = element(by.id('addPublisherStatus')).getText();
            expect(status).toBe('Publisher added successfully');

        });
    });
});
