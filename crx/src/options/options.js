document.addEventListener('DOMContentLoaded', async () => {
  await set_up_server_url()
})

async function set_up_server_url() {
  await init()
  set_up_save_button()
}

function set_up_save_button() {
  const button_save = document.getElementById('saveButton')
  const input_server_url = document.getElementById('server-url')

  button_save.addEventListener('click', () => {
    const server_url = input_server_url.value
    chrome.storage.sync.set({ server_url: server_url })
  })
}

async function init() {
  const server_url = (await chrome.storage.sync.get(['server_url'])).server_url

  const input_server_url = document.getElementById('server-url')
  input_server_url.value = server_url
}
