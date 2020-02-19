const utilities = require('../../src/callback/utilities')

describe('utilities', () => {
  describe('urlToFilename()', () => {
    test('https? スキームなどを除いた URL パスが返ってくる', () => {
      expect(utilities.urlToFilename('https://example.com/foo/bar/')).toBe(
        'example.com/foo/bar.html'
      )
    })
  })
})
