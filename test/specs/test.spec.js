/*
describe('My first JS test', () => {    
    let initialUrl = 'http://v4.webdriver.io';
    let lastStepUrl;

    it('Search popup should be displayed', () => {
        browser.url(initialUrl);        
        const searchField = $('.ds-input');
        searchField.setValue('getText');        
        const searchDropDown = $('#algolia-autocomplete-listbox-0');
        searchDropDown.waitForDisplayed(3000);
        assert.isTrue(searchDropDown.isDisplayed()); 
        initialUrl = browser.getUrl();       
    });    

    it('"Get Text" page should be opened', () => {
        const getTextlink = $('//span[contains(text(), "getText")]');
        getTextlink.click();
        assert.equal(browser.getTitle(), 'getText · WebdriverIO');                
    });

    it('Verify initial and last step URL-s', () =>{
        lastStepUrl = browser.getUrl();
        console.log('!!!!!!!!!!Urls are equal' + initialUrl == (lastStepUrl));
        //assert.isFalse(initialUrl == lastStepUrl);

        console.log('?? are url\'s equal' + assert.isFalse(initialUrl.localeCompare(lastStepUrl)));
    })
});

describe('My second JS test', () => {
    let initialUrl = 'http://v4.webdriver.io';
    let lastStepUrl;

    it('Search popup should be displayed', () => {
        browser.url(initialUrl);        
        const searchField = $('.ds-input');
        searchField.setValue('getText');        
        const searchDropDown = $('#algolia-autocomplete-listbox-0');
        searchDropDown.waitForDisplayed(3000);
        assert.isTrue(searchDropDown.isDisplayed()); 
        initialUrl = browser.getUrl();       
    });    

    it('"Get Text" page should be opened', () => {
        const getTextlink = $('//span[contains(text(), "getText")]');
        getTextlink.click();
        assert.equal(browser.getTitle(), 'getText · WebdriverIO');                
    });

    it('Verify  initial and last step URL-s ', () =>{
        lastStepUrl = browser.getUrl();
        console.log('!!!!!!!!!!Urls are equal' + initialUrl == (lastStepUrl));
        assert.isTrue(initialUrl == lastStepUrl);
        //assert.isFalse(initialUrl.equals(lastStepUrl));
       // browser.debug();
    })
});
*/