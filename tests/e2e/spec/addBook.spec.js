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

    describe('When the Add button is clicked -', function addButtonTests() {

        it('will send the publisher to the service and receive a 500 if the data is not as expected', function sendBadBookData() {

            var value = element(by.id('bookTitle')).sendKeys('Test Wrong Book');
            expect(value).toBe('');

            value = element(by.id('bookCode')).sendKeys('TC01');
            expect(value).toBe('');

            value = element(by.id('bookDescription')).sendKeys('Test Description');
            expect(value).toBe('');

            value = element(by.id('bookCost')).sendKeys('12.95');
            expect(value).toBe('0');

            value = element(by.id('bookInInventory')).isSelected();
            expect(value).toBe(true);

            value = element(by.id('bookIsPdf')).isSelected();
            expect(value).toBe(false);

            value = element(by.id('bookIsPrint')).isSelected();
            expect(value).toBe(true);

            value = element(by.id('bookLocation')).sendKeys('Location 1');
            expect(value).toBe('');

            value = element(by.id('bookType')).sendKeys('RPG');
            expect(value).toBe('RPG');
            
            var button = element(by.id('addBookButton'));
            button.click();

            var status = element(by.id('addBookStatus')).getText();
            expect(status).toBe('Failed to add book: 500');

        });
    });

});
