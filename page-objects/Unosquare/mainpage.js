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
        .api.findElements('div>.name', function(elements){
          let flag= false
          elements.value.forEach(function (elementObj, i) {
            let elementID = elementObj[Object.keys(elementObj)[0]]
            unos.api.elementIdText(elementID, function (result){      
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