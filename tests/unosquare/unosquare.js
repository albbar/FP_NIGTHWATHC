module.exports = {
    'Demo test unosquare' : function(browser) {

      const unosquare = browser.page.mainpage();
      const formName = unosquare.getDataName();
      const formSearch = unosquare.getDataSearch();
      const blogUrl ='https://blog.unosquare.com/'

      unosquare
        .navigate()
        .maximizeWindow()
        .selectMenuOpc('@blogMenu')
        .assert.urlEquals(blogUrl, `The URL: ${blogUrl} is the same`)
        .search(formSearch.qa)
        .assert.textContains('@resultTitle', formSearch.qa, "The title has the word 'QA'")
        .search(formSearch.dev)
        .assert.textContains('@resultTitle', formSearch.dev, "The title has the word 'Development'")
        .search(formSearch.java)
        .assert.textContains('@resultTitle', formSearch.java, "The title has the word 'JAVA'")
        .search(formSearch.test)
        .assert.textContains('@resultTitle', formSearch.test, "The title has the word 'Testing'")
        .selectMenuOpc('@aboutMenu')
        .validateName(formName.marioDiVece)

      unosquare.validateName(formName.giancarloDiVece)
      unosquare.validateName(formName.eduardoArias)
      unosquare.validateName(formName.ignacionMiranda)
      unosquare.validateName(formName.diegoHuerta)

      unosquare.saveScreenshot('tests_output/screenshots/unosquare.png')    
    }   
  };

