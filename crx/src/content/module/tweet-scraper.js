const DomQueryConstants = require('./dom-query-constants.js')
const domQuery = new DomQueryConstants()
const parser_tweet_text = require('./tweet-parser.js')

module.exports = scrape_tweet

function scrape_tweet(node) {
  const section_tweet_text = node.querySelector(domQuery.TWEET_TEXT)
  const tweet_text = parser_tweet_text(section_tweet_text)

  const username = node.querySelector(domQuery.USERNAME).textContent
  const screen_name = node.querySelector(domQuery.SCREEN_NAME).textContent.slice(1)
  const user_icon_source = node.querySelector(domQuery.USER_ICON).src
  const tweet_url = node.querySelector(domQuery.TWEET_URL).href
  const tweet_date = node.querySelector(domQuery.TWEET_DATE).getAttribute('datetime')

  const section_tweet = node.querySelector(domQuery.TWEET)
  const has_media = section_tweet.childElementCount === 4
  let media_type
  let photo_sources
  let card_link_url
  let card_title
  let card_thumbnail
  let video_source
  let video_thumbnail
  if (has_media) {
    ;[media_type, photo_sources, card_link_url, card_title, card_thumbnail, video_source, video_thumbnail] = scrape_media_type(section_tweet)
  }

  const inhale = {
    tweet: {
      author: {
        username: username,
        screen_name: screen_name,
        icon_source: user_icon_source,
      },
      url: tweet_url,
      date: tweet_date,
      text: tweet_text,
      has_media: has_media,
      media: {
        media_type: media_type,
        content_photo: {
          file_paths: photo_sources,
        },
        content_video: {
          file_path: video_source,
          thumbnail_path: video_thumbnail,
        },
        content_card: {
          url: card_link_url,
          title: card_title,
          thumbnail_path: card_thumbnail,
        },
      },
    },
    date: new Date(),
    tags: ['test'],
  }

  return inhale
}

function scrape_media_type(section_tweet) {
  let media_type = 'unknown'
  let photo_sources = []
  let card_link_url
  let card_title
  let card_thumbnail
  let video_source
  let video_thumbnail

  const section_video = section_tweet.querySelector('video')
  const section_photo = section_tweet.querySelectorAll('[data-testid="tweetPhoto"]')
  const section_card = section_tweet.querySelector('[data-testid="card.wrapper"]')

  if (section_video) {
    media_type = 'video'
    video_source = section_video.firstChild.src
    video_thumbnail = section_video.poster
  } else if (section_photo.length > 0) {
    media_type = 'photo'
    photo_sources = [...section_photo].map((s) => {
      return s.querySelector('img').src
    })
  } else if (section_card) {
    media_type = 'card'
    card_link_url = section_card.querySelector('a').href
    card_title = section_card.querySelector('a span').textContent
    card_thumbnail = section_card.querySelector('img').src
  }

  return [media_type, photo_sources, card_link_url, card_title, card_thumbnail, video_source, video_thumbnail]
}
