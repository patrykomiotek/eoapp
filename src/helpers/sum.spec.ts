import { sum } from './sum';

describe('sum function', () => {
  it('calculates correctly', () => {
    expect(sum(2, 2)).toBe(2);
    expect(sum(1, 2)).toBe(2);
  })
});