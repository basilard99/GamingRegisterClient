'use strict';

describe('The main page will behave as follows -', function testSuite() {

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

	describe('URL access will be as follows -', function redirectionTests() {

		it('navigating to index.html will redirect to /main', function testRedirectToMain() {
			browser.driver.get(localPath + 'index.html#/');
			browser.getLocationAbsUrl().then(function compareUrl(url) {
				expect(url).toEqual('/main');
			});
		});

		it('a garbage request will be redirected to /main', function testGarbageRequest() {
			browser.driver.get(localPath + 'index.html#/garbage');
			browser.getLocationAbsUrl().then(function compareUrl(url) {
				expect(url).toEqual('/main');
			});
		});

	});

	describe('User actions are taken -', function userActions() {

		it('when Show Publishers is clicked then the user is sent to /publishersList', function testShowClicked() {
			var button = element(by.id('listPublishersButton'));
			button.click();
			browser.getLocationAbsUrl().then(function compareUrl(url) {
				expect(url).toEqual('/publishersList');
			});
		});

		it('when Add Publisher is clicked then the user is sent to /addPublisher', function testAddClicked() {
			var button = element(by.id('addPublisherButton'));
			button.click();
			browser.getLocationAbsUrl().then(function compareUrl(url) {
				expect(url).toEqual('/addPublisher');
			});
		});

	});
});
