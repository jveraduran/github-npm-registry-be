import { EnumValueObject } from '../../../../../src/value-object/primitives/enum-value-object';

export enum SEASONS {
  AUTUMN = 'AUTUMN',
  WINTER = 'WINTER',
  SPRING = 'SPRING',
  SUMMER = 'SUMMER'
}

export class Seasons extends EnumValueObject<SEASONS> {
  constructor(value: SEASONS) {
    super(value, Object.values(SEASONS));
  }

  protected throwErrorForInvalidValue(value: string): void {
    throw new Error(`the value: ${value}, no exists on seasons`);
  }
}

