let homepage = function(){

    let fisrtNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goBotton = element(by.css('[ng-click="doAddition()"]'));
    
    this.get = function (url){
        browser.get(url);
    };

    this.enterFirstNumber = function(firstNo){
        fisrtNumber_input.sendKeys(firstNo);
    };

    this.enterSecondNumber = function(secondNo){
        secondNumber_input.sendKeys(secondNo);
    };

    this.clickGo = function(){
        goBotton.click();
    };

    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding',result));
        expect (output.getText()).toEqual(result);

    };

};
module.exports = new homepage();