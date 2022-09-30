module.exports = {
    'Demo test unosquare' : function(browser) {

      var unosquare = browser.page.mainpage();
      let resultList=[
        "MARIO DI VECE",
    ];

      unosquare
      .navigate()
      .maximizeWindow()
      .waitForElementPresent('@blogMenu',5000)
      //.waitForElementVisible('@buttonMenu',5000)
      //.click('@buttonMenu')
      .waitForElementVisible('@blogMenu', 10000)
      .click('@blogMenu')
      .assert.urlEquals('https://blog.unosquare.com/')
      .click('@searchBar')
      .setValue('@searchBar', "QA")
      .click('@searchButton')
      .assert.textContains('@resultTitle','QA')
      //.click('@buttonMenu')
      .click('@aboutMenu')
      //.assert.textContains('.name', "GIANCARLO DI VECE")
    

      .api.findElements('div>.name', function(elements){
        resultList.forEach(function(elementList){
          let flag= false
          elements.value.forEach(function (elementObj, i) {
            let elementID = elementObj[Object.keys(elementObj)[0]]
            unosquare.api.elementIdText(elementID, function (result){      
              console.log(i==(elements.value.length-1))
              if(elementList==result.value){
                browser.assert.equal(elementList, result.value)
                flag = true
              }
              else if(i==(elements.value.length-1) && !flag)
              browser.assert.equal( result.value, elementList, "Value doesn't exist in the list")             
            })
          })
        })
      })
      unosquare.saveScreenshot('tests_output/screenshots/unosquare.png')    
    }   
  };

