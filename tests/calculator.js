let homepage = require('../pages/homepage')

describe('demo calculator test', function () {

    it('subtraction test', function () {
    //it('addition test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');
        homepage.enterSecondNumber('3');
        homepage.clickGo();
        //homepage.clickGo1();
        homepage.verifyResult('7');

        browser.sleep(2000)

        //browser.get('http://juliemr.github.io/protractor-demo/');
        //element(by.model('first')).sendKeys('2');
        //element(by.model('second')).sendKeys('3');
        //element(by.css('[ng-click="doAddition()"]')).click();
        //let result = element(by.cssContainingText('.ng-binding','5'));
        //expect(result.getText()).toEqual('5');

    });
});