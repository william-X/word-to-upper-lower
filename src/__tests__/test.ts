import { wordChange, IWordChangeType, wordsChange, IWordsChangeType } from '../index';

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

  it('AAA1', () => {
    expect(wordsChange({ words: 'Favorites and suggestions', type: IWordsChangeType.AllInitialUpper })).toBe('Favorites And Suggestions');
  });

  it('AAA2', () => {
    expect(wordsChange({ words: 'Favorites and suggestions', type: IWordsChangeType.AllWordUpper })).toBe('FAVORITES AND SUGGESTIONS');
  });

  it('AAA3', () => {
    expect(wordsChange({ words: 'Favorites and suggestions', type: IWordsChangeType.FirstLowerOtherInitialUpper })).toBe('favorites And Suggestions');
  });

  it('AAA4', () => {
    expect(wordsChange({ words: 'Favorites', type: IWordsChangeType.FirstLowerOtherInitialUpper })).toBe('favorites');
  });
})