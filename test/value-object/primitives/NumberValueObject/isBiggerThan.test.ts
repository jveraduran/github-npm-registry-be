import { IntegerMother } from '../../../mother-object/IntegerMother';
import Age from './__mocks__/Age';

let age: number;

describe('NumberValueObject', () => {
  beforeEach(() => {
    age = 1
  })

  describe('bigger than', () => {
    it(`should return "true" if the values are bigger than ${age}`, () => {
      const actualAge = new Age(IntegerMother.random());
      const smallerAge = new Age(age)
      const expected = actualAge.isBiggerThan(smallerAge);

      expect(expected).toBe(true);
    })

    it(`should return "false" if the values are not bigger than ${age}`, () => {
      const actualAge = new Age(0);
      const biggerAge = new Age(age)
      const expected = actualAge.isBiggerThan(biggerAge);

      expect(expected).toBe(false);
    })
  })
})
