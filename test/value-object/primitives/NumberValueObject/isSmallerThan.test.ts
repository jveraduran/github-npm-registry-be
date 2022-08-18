import { IntegerMother } from '../../../mother-object/IntegerMother';
import Age from './__mocks__/Age';

let age: number;

describe('NumberValueObject', () => {
  beforeEach(() => {
    age = 1
  })

  describe('smaller than', () => {
    it(`should return "true" if the values are smaller than ${age}`, () => {
      const actualAge = new Age(0);
      const biggerAge = new Age(age)
      const expected = actualAge.isSmallerThan(biggerAge);

      expect(expected).toBe(true);
    })

    it(`should return "false" if the values are not smaller than ${age}`, () => {
      const actualAge = new Age(IntegerMother.random());
      const smallerAge = new Age(age)
      const expected = actualAge.isSmallerThan(smallerAge);

      expect(expected).toBe(false);
    })
  })
})
