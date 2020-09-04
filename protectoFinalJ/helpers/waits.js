class waits{


    waitUntilElementIsDisplayed(element){
    
        browser.waitUntil(

            () => element.isDisplayed(),
            {
            timeout: 10000,
            timeoutMsg: element + 'Element was not fount in after 5s'

            }

        );

    }

}

module.exports = new waits();