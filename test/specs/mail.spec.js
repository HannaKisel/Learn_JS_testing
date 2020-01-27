describe('mailinator test', () => {
    const malinatorURL = 'https://www.mailinator.com/';

    let mailSubjectText;

    it('Check recipient name', () => {
        browser.url(malinatorURL);
        let searchField = $('#addOverlay');

        let mail = 'test';
        searchField.setValue(mail);

        let goButton = $('#go-to-public');
        console.log('Is go button displayed - ' + goButton.isDisplayed());
        goButton.click();

        browser.pause(9000); // add some waiter?? 
        let firstMailLink = $('//tr[@class="even pointer ng-scope"]'); // change to '//tr[@class="even pointer ng-scope"]//td[@class="ng-binding"][2]'
        //firstMailLink.waitForClickable();

        firstMailLink.click();
        browser.pause(3000);

        let mailSubject = $('//td[contains(text(), "Sub")]/..//b');
        mailSubjectText = mailSubject.getText();
        console.log('first mail text is ' + mailSubjectText);

        let recipientName = $('//td[contains(text(), "To")]/..//b')
        assert.equal(mail, recipientName.getText());
    })

    it('Check mail date', () => {
        var moment = require('moment');
        var now = moment();
        moment.locale();

        let timeNow = now.format('ddd MMM DD YYYY HH:mm:ss');//new Date(now.format('ddd, MMM DD YYYY, HH:mm:ss'));//check it
        console.log('Time now is: ' + timeNow);

        let timeDataArea = $('//td[contains(text(), "Rec")]/..//b');
        let mailData = timeDataArea.getText();
        console.log('Mail data is: ' + mailData);

        //console.log('Difference between datas is: ' + parseInt(timeNow - mailData)); gives NaN

        let mailDay = mailData.substr(0, 15);
        let nowDay = timeNow.substr(0, 15);
        console.log('Substr Mail data is: ' + mailDay);
        console.log('Substr Now data is: ' + nowDay);
        assert.equal(nowDay, mailDay);

        let convertedMailData = new Date(mailData);
    })

    it('Delete selected email', () => {
        let backTOInboxLink = $("//a[contains(text(), 'Back')]");
        backTOInboxLink.click();
        browser.pause(30000);

        let firstMailCheckbox = $(`//a[contains(text(),'${mailSubjectText}')]/ancestor::tr`);

        firstMailCheckbox.click();
        browser.pause(3000);

        let deleteButton = $("#trash_but");
        deleteButton.click();
        browser.pause(3000);
        browser.acceptAlert();

        browser.debug();
    })
})