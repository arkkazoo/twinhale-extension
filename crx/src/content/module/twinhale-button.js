const send_inhale = require('./api.js')
const scrape_tweet = require('./tweet-scraper.js')

module.exports = create_twinhale_button

function create_twinhale_button(node) {
  const button_twinhale = document.createElement('div')

  button_twinhale.textContent = '☆'
  button_twinhale.style = 'margin-left: 8px'
  button_twinhale.role = 'button'
  button_twinhale.addEventListener('click', async () => {
    const inhale = scrape_tweet(node)
    console.log(inhale)
    await send_inhale(inhale)
  })
  return button_twinhale
}
