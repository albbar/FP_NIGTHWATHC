module.exports = {
    'Demo test unosquare' : function(browser) {
      browser
      .windowMaximize()
      .url('https://www.unosquare.com')
      .waitForElementVisible('body')
      .waitForElementVisible('div#quotesIndicators>h2.subtitle')
      .assert.containsText("div#quotesIndicators>h2.subtitle", "TESTIMONIALS")
      .end();
    }
  };
