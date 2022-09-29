module.exports = {
    'Demo test unosquare' : function(browser) {

      var unosquare = browser.page.mainpage();

      unosquare
      .navigate()
      .waitForElementVisible('@contactusMenu', 10000)
      .click('@contactusMenu')
    }
  };
