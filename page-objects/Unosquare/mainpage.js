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
      containerName: "div>.name",
      test: ".subtitle.my-5"
    },
    commands :[{
      getData(){
          return require('../../dataExternal/unosquareForm.json')
      }

  }]
  };