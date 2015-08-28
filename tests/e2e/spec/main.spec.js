describe('Main Page', function() {
    it('should redirect index.html to index.html#/main', function() {
        browser.driver.get('file:///C:/Users/Chris/Development/BIClient/index.html#/');
         browser.getLocationAbsUrl().then(function(url) {
            expect(url).toEqual('/main');
        });
    });

    it('should redirect garbage request to index.html/main', function() {
        browser.driver.get('file:///C:/Users/Chris/Development/BIClient/index.html#/garbage');
        browser.getLocationAbsUrl().then(function(url) {
            expect(url).toEqual('/main');
        });
    });

    it('should redirect to addPublisher when Add Publisher is clicked', function() {
        var button = element(by.id('addPublisherButton'));
        button.click();
        browser.getLocationAbsUrl().then(function(url) {
            expect(url).toEqual('/addPublisher');
        });
    })
});
