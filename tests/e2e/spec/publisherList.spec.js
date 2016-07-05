'use strict';

describe('Publisher List Page', function testInteractingWithPublisherList() {

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

    it('should show a list of publishers', function testShowPublisher() {
        browser.driver.get(localPath + 'index.html#/publisherList');
        var publisherList = element.all(by.className('list-group-item'));
        expect(publisherList.count()).toBe(2);
    });

    it('should tell the user it was successful', function testShowSuccess() {
        browser.driver.get(localPath + 'index.html#/publisherList');
        var status = element(by.className('alert-info'));
        expect(status.isDisplayed()).toBe(true);
    });

});
