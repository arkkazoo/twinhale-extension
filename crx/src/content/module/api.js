module.exports = async function send_inhale(inhale) {
  const url = (await chrome.storage.sync.get(['server_url'])).server_url
  if (!url) {
    console.error('server url is not defined')
    return
  }
  const result = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(inhale),
  })

  console.log(result)
}
