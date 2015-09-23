describe('Main Page', function() {
	// Replace backslashes with forward slashes. On a Windows machine
	// this will convert to a url style. If not, then it won't do
	// anything. (I think)
	var parts = __dirname.replace(/\\/g, '/').split('/');
	
	// Now that we have the parts, put them back together
	var localPath = 'file:///';	
	for (var i = 0; i < parts.length - 3; i++) { localPath = localPath + parts[i] +'/'; } 
	
    it('should redirect index.html to index.html#/main', function() {
		
		browser.driver.get(localPath + 'index.html#/');
        browser.getLocationAbsUrl().then(function(url) {
			expect(url).toEqual('/main');
        });
    });

    it('should redirect garbage request to index.html/main', function() {
        browser.driver.get(localPath + 'index.html#/garbage');
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
