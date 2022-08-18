import { Seasons, SEASONS } from './__mocks__/Seasons'


describe('EnumValueObject', () => {
  describe('check value is valid', () => {
    it(`should return void if the value exists on SEASONS`, () => {
      const expected = new Seasons(SEASONS.SPRING);

      expect(expected).toBeInstanceOf(Seasons)
    })
  })
}) 