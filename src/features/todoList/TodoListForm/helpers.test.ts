import { getNumberOfPages } from './helpers';

describe('getNumberOfPages', () => {
  it('should to be 4', () => {
    expect(getNumberOfPages([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toBe(4);
  });

  it('should to be 4', () => {
    expect(getNumberOfPages([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3)).toBe(
      4,
    );
  });

  it('should to be 5', () => {
    expect(
      getNumberOfPages([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 3),
    ).toBe(5);
  });
});
