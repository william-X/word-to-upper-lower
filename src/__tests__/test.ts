import { wordChange, IWordChangeType } from '../index';

describe('wordChange', () => {
  it('should return "ABC" for "abc"', () => {
    expect(wordChange('abc', IWordChangeType.AAA)).toBe('ABC');
  });

  it('should return "abc" for "abc"', () => {
    expect(wordChange('ABC', IWordChangeType.aaa)).toBe('abc');
  });

  it('should return "Abc" for "abc"', () => {
    expect(wordChange('abc', IWordChangeType.Aaa)).toBe('Abc');
  });

  it('should return "Abc" for "abc"', () => {
    expect(wordChange('a', IWordChangeType.Aaa)).toBe('A');
  });

  it('should return "Abc" for "abc"', () => {
    expect(wordChange('', IWordChangeType.Aaa)).toBe('');
  });
})