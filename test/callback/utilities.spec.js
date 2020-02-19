describe('utilities', () => {
  test('NODE_ENV', () => {
    expect(process.env.NODE_ENV).toBe('test')
  })
})
