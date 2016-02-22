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

    describe('The initial form values will be specified defaults -', function testInitialValues() {

        it('The initial name is correct', function testInitialName() {
            var input = element(by.id('publisherName'));
            var value = input.getAttribute('placeHolder');
            expect(value).toEqual('Publisher Name');
        });

        it('The initial web site is correct', function testInitialName() {
            var input = element(by.id('webSite'));
            var value = input.getAttribute('placeHolder');
            expect(value).toEqual('www.somewhere.com');
        });

        it('The initial code is correct', function testInitialName() {
            var input = element(by.id('code'));
            var value = input.getAttribute('placeHolder');
            expect(value).toEqual('XXX');
        });

        it('The initial active flag is correct', function testInitialName() {
            var input = element(by.id('isActive'));
            var value = input.getAttribute('checked');
            expect(value).toEqual('true');
        });
    });
});
