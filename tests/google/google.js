module.exports = {
    '@tags': ['google'],
    'Google Advance Search': function(browser){
        //const mainQuery = 'Elon Musk';

        const page = browser.page.googleAdvancedSearch();
        const form = page.getData();

        const resultsPageQuerySelector = `#searchform input[name="q"][value="${form.mainQuery}"]`;
        const resultsPageLanguageSelector = '.hdtb-mn-hd.Yg3U7e.EISXeb>.KTBKoe';
        
        page
            .navigate()
            .setQuery(form.mainQuery)
            .selectFilter('@languageDropdown', 'lang_it')
            .selectFilter('@lastUpdateDropdown', 'm')
            .search();

        browser
            .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
            .assert.urlContains('lr=lang_it', 'Params: Language is Italiano')
            .assert.urlContains('as_qdr=m', 'Time period is last month')
            .assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in the query input')
            .assert.textContains(resultsPageLanguageSelector, 'Buscar páginas en Italiano', 'UI: Language is set to Italian')
            .saveScreenshot('tests_output/screenshots/google.png')
    }
};
