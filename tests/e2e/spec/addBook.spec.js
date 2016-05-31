'use strict';

describe('The \'Add Book\' page will behave as follows - ', function addBookTestSuite() {

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
        browser.driver.get(localPath + '/index.html#/addBook');
    });

    describe('When the page is first loaded - ', function pageFirstLoaded() {

        it('the fields will be set to the appropriate defaults', function checkDefaults() {

            var value = element(by.id('bookTitle')).getAttribute('value');
            expect(value).toBe('');

            value = element(by.id('bookCode')).getAttribute('value');
            expect(value).toBe('');

            value = element(by.id('bookDescription')).getAttribute('value');
            expect(value).toBe('');

            value = element(by.id('bookCost')).getAttribute('value');
            expect(value).toBe('0');

            value = element(by.id('bookInInventory')).isSelected();
            expect(value).toBe(true);

            value = element(by.id('bookIsPdf')).isSelected();
            expect(value).toBe(false);

            value = element(by.id('bookIsPrint')).isSelected();
            expect(value).toBe(true);

            value = element(by.id('bookLocation')).getAttribute('value');
            expect(value).toBe('');

            value = element(by.id('bookType')).getAttribute('value');
            expect(value).toBe('RPG');
        });
    });
/*
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
*/
});
