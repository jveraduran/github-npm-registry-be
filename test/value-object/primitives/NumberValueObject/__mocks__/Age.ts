import { NumberValueObject } from '../../../../../src/value-object/primitives/number-value-object';

export default class Age extends NumberValueObject {
  constructor(value: number) {
    super(value);
  }
}