export abstract class NumberValueObject {
  readonly value: number;

  constructor(value: number) {
    this.value = value;
  }

  equalsTo(otherNumber: NumberValueObject): boolean {
    return this.value === otherNumber.value;
  }

  isBiggerThan(otherNumber: NumberValueObject): boolean {
    return this.value > otherNumber.value;
  }

  isSmallerThan(otherNumber: NumberValueObject): boolean {
    return this.value < otherNumber.value;
  }
}
