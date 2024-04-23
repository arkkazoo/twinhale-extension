module.exports = parser_tweet_text

function parser_tweet_text(tweet_text_node) {
  if (tweet_text_node == null) return null
  const segments = []
  for (const child_node of tweet_text_node.children) {
    const tag_name = child_node.tagName
    segments.push(parser[tag_name](child_node))
  }

  return segments.join('')
}

const parser = {
  DIV: _parser_none,
  A: _parser_a,
  IMG: _parser_img,
  SPAN: _parser_none,
}

function _parser_none(node) {
  return node.textContent
}

function _parser_a(node) {
  return [...node.childNodes]
    .map((child_node) => child_node.textContent ?? '')
    .filter((text) => text !== '…')
    .join('')
}

function _parser_img(node) {
  return node.alt
}
