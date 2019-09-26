const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
  .goto('https://www.buscape.com.br/')
  .type('#main-search', 'j7 pro')
  .click('#btn-search')
  .wait('.inner')
  .evaluate(() => document.querySelector('.card--product__name'))
  .end()
  .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })