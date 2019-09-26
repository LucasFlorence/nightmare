const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
  .goto('https://dolarhoje.com')
  // .type('#search_form_input_homepage', 'github nightmare')
  // .click('#search_button_homepage')
  .wait('.nacional')
  .evaluate(() => document.querySelector('#nacional').value)
  .end()
  .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })