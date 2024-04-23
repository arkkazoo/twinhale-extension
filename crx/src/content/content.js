const DomQueryConstants = require('./module/dom-query-constants.js')
const domQuery = new DomQueryConstants()
const create_twinhale_button = require('./module/twinhale-button.js')

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.addedNodes.length) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE && node.matches(domQuery.TWEET_CELL)) {
          const button_twinhale = create_twinhale_button(node)
          const section_reaction = node.querySelector(domQuery.TWEET).lastChild.firstChild.firstChild
          section_reaction.appendChild(button_twinhale)
        }
      }
    }
  }
})

observer.observe(document.body, { childList: true, subtree: true })
