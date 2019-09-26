const Nightmare = require('nightmare');
const nightmare = Nightmare({show: true});


nightmare
  .goto('https://duckduckgo.com')
  .insert('#search_form_input_homepage', 'ubuntu')
  .click('#search_button_homepage')
  // .wait('#r1-0')
  .evaluate(function() {
    let searchResults = [];

    const results =  document.querySelectorAll('h2.result__title a.result__a');
    results.forEach(function(result) {
      let row = {
        'title':result.innerText,
        'url':result.href
      }
      searchResults.push(row);
    });
    return searchResults;
  })
  .end()
  .then(function(result) {
    result.forEach(function(r) {
      console.log('Title: ' + r.title);
      console.log('URL: ' + r.url);
      // console.log(r);
    })
    // console.log(result);

  })
  .catch(function(e)  {
    console.log(e);
  });