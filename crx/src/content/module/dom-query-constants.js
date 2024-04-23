module.exports = DomQueryConstants

class DomQueryConstants {
  TWEET_CELL = 'div[data-testid="cellInnerDiv"]'
  TWEET = 'article[data-testid="tweet"] > div > div > div:nth-child(2) > div:nth-child(2)'
  USERNAME = '[data-testid="User-Name"] > div:nth-child(1) > div > a > div > div:nth-child(1) > span'
  SCREEN_NAME = '[data-testid="User-Name"] > div:nth-child(2) > div > div:nth-child(1)'
  USER_ICON = 'article[data-testid="tweet"] > div > div > div:nth-child(2) > div:nth-child(1) > div > div > div > div > div:nth-child(2) > div > div:nth-child(2) > div > a > div:nth-child(3) > div > div:nth-child(2) > div > img'
  TWEET_URL = '[data-testid="User-Name"] > div:nth-child(2) > div > div:nth-child(3) a'
  TWEET_DATE = '[data-testid="User-Name"] > div:nth-child(2) > div > div:nth-child(3) a > time'
  TWEET_TEXT = '[data-testid="tweetText"]'
}
