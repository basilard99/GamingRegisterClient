'use strict';

describe('Main Page', function testSuite() {

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
		browser.driver.get(localPath + 'index.html#/');
	});

	describe('When you try to get to the landing page - ', function testRouting() {

		it('going to \'index.html\' sends you to the main page', function testRedirectToMain() {
			browser.driver.get(localPath + 'index.html#/');
			browser.getLocationAbsUrl().then(function compareUrl(url) {
				expect(url).toEqual('/main');
			});
		});

		it('going to a page that doesn\'t exist sends you to the main page', function testGarbageRequest() {
			browser.driver.get(localPath + 'index.html#/garbage');
			browser.getLocationAbsUrl().then(function compareUrl(url) {
				expect(url).toEqual('/main');
			});
		});

		it('going to a page that does exist directly (deep-linking) sends you to that page', function testDeepLinking() {
			browser.driver.get(localPath + 'index.html#/addPublisher');
			browser.getLocationAbsUrl().then(function compareUrl(url) {
				expect(url).toEqual('/addPublisher');
			});
		});

		it('going to a VIEW directly sends you to the main page', function testDirectlyToView() {
			browser.driver.get(localPath + 'app/views/addPublisher.html');
			browser.getLocationAbsUrl().then(function compareUrl(url) {
				expect(url).toEqual('/addPublisher');
			});
		});

	});

	describe('When the user chooses an action -', function testUserActions() {

		it('\'Show Publishers\' should show a list of publishers', function testShowPublisherClicked() {
			var button = element(by.id('listPublishersButton'));
			button.click();
			browser.getLocationAbsUrl().then(function compareUrl(url) {
				expect(url).toEqual('/publisherList');
			});
		});

		it('\'Add Publisher\' should show a form for the user to add a publisher', function testAddPublisherClicked() {
			var button = element(by.id('addPublisherButton'));
			button.click();
			browser.getLocationAbsUrl().then(function compareUrl(url) {
				expect(url).toEqual('/addPublisher');
			});
		});

		it('\'Add Book\' should show a form for the user to add a book', function testAddBookClicked() {
			var button = element(by.id('addBookButton'));
			button.click();
			browser.getLocationAbsUrl().then(function compareUrl(url) {
				expect(url).toEqual('/addBook');
			});
		});

	});

});
