'use strict';

describe('Add Book page - ', function addBookTestSuite() {

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
            var value = element(by.id('publisherList')).getAttribute('value');
            expect(element(by.id('publisherList')).all(by.tagName('option')).count()).toBe(2);

            value = element(by.id('bookTitle')).getAttribute('value');
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

    describe('When the user enters invalid data clicks the \'Add\' button -', function addButtonTests() {

        it('will send the information to the service and receive a 400', function sendBadBookData() {

            element(by.id('bookTitle')).clear();
            element(by.id('bookTitle')).sendKeys('Test Wrong Book');

            element(by.id('bookCode')).clear();
            element(by.id('bookCode')).sendKeys('TC99'); // This is the bad data that the server will reject on.

            element(by.id('bookDescription')).clear();
            element(by.id('bookDescription')).sendKeys('Test Description');

            element(by.id('bookCost')).clear();
            element(by.id('bookCost')).sendKeys('12.95');

            element(by.id('bookInInventory')).click();

            element(by.id('bookIsPdf')).click();

            element(by.id('bookIsPrint')).click();

            element(by.id('bookLocation')).clear();
            element(by.id('bookLocation')).sendKeys('Location 1');

            element(by.id('bookType')).clear();
            element(by.id('bookType')).sendKeys('RPG');

            var button = element(by.id('addBookButton'));
            button.click();

            var status = element(by.id('addBookStatus')).getText();
            expect(status).toBe('Failed to add book: 400');

        });
    });

    describe('When the user enters valid data clicks the \'Add\' button -', function addButtonTests() {

        it('will send the information to the service and receive a successful response', function sendGoodBookData() {
            
            element(by.id('bookTitle')).clear();
            element(by.id('bookTitle')).sendKeys('Test Wrong Book');
            
            element(by.id('publisherList')).all(by.tagName('option')).last().click();

            element(by.id('bookCode')).clear();
            element(by.id('bookCode')).sendKeys('TC01');

            element(by.id('bookDescription')).clear();
            element(by.id('bookDescription')).sendKeys('Test Description');

            element(by.id('bookCost')).clear();
            element(by.id('bookCost')).sendKeys('12.95');

            element(by.id('bookInInventory')).click();

            element(by.id('bookIsPdf')).click();

            element(by.id('bookIsPrint')).click();

            element(by.id('bookLocation')).clear();
            element(by.id('bookLocation')).sendKeys('Location 1');

            element(by.id('bookType')).clear();
            element(by.id('bookType')).sendKeys('RPG');

            var button = element(by.id('addBookButton'));
            button.click();

            var status = element(by.id('addBookStatus')).getText();
            expect(status).toBe('Book added successfully');

        });
    });

});
