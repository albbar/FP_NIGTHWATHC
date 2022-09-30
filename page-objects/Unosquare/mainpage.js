module.exports = {
    url: 'https://www.unosquare.com',
    elements: {
      buttonMenu: "button>.nav-icon",
      aboutMenu: "[href='https://www.unosquare.com/About']",
      blogMenu: "[href='https://blog.unosquare.com']",
      blogHeader: ".breadcrumb-container>h1",
      searchBar: "#search-bar",
      searchButton: ".search-icon",
      resultTitle: ".results-title",
      containerName: "div>.name"
    },
    commands :[{
      search(value){
        return this
          .click('@searchBar')
          .setQuery(value)
          .click('@searchButton')
      },
      selectMenuOpc(selector){
          return  this
          .waitForElementVisible(selector, 3000)
          .click(selector)
        
      },
      setQuery(value){
        return this
          .setValue('@searchBar', value)
      },
      validateName(value){
        let unos = this
        return unos
        .api.findElements('div>.name', function(elements){ //search for multiples elements on the page and returns them as web element JSON objects
          let flag= false
          elements.value.forEach(function (elementObj, i) { // iterate over the different elements
            let elementID = elementObj[Object.keys(elementObj)[0]] // get the KEY (ELEMENT) for the JSON objects to get the elementObjt ID
            unos.api.elementIdText(elementID, function (result){     //get the visible text or innertext of the elements in the call back function using
              /**For the test we need to know if the "value" is contain in "result.value" */
              if(value==result.value){ 
                unos.assert.equal(result.value, value, `${value} exist in the list`)
                flag = true
              }
              else if(i==(elements.value.length-1) && !flag)
              unos.assert.equal( result.value, value, `${value} doesn't exist in the list`)             
            })
          })
      })

      },
      getDataName(){
          return require('../../dataExternal/unosquareName.json')
      },
      getDataSearch(){
        return require('../../dataExternal/unosquareSearch.json')
    }
  }]
};