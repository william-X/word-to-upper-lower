/** 不内置字符判断，需要判断的，自行加 */

import { map } from 'lodash-es';

/** 单词转化类型 */
export enum IWordChangeType {
  /** 首字母大写 */
  Aaa = 1,
  /** 全部转大写 */
  AAA,
  /** 全部转小写 */
  aaa,
}

/** 单词转化函数 */
export function wordChange(word: string, type: IWordChangeType): string {
  switch (type) {
    case IWordChangeType.AAA:
      return word.toUpperCase();
    case IWordChangeType.aaa:
      return word.toLowerCase();
    case IWordChangeType.Aaa:
    default:
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
}


/** 单词转化类型 */
export enum IWordsChangeType {
  /** 第一个单词小写，其他的单词首字母大写 */
  FirstLowerOtherInitialUpper = 1,
  /** 全部单词首字母大写 */
  AllInitialUpper,
  /** 每个单词都大写 */
  AllWordUpper,
}

/** 句子或词组转化 */
export function wordsChange({ words, type }: { words: string, type: IWordsChangeType }): string {
  if (words.length > 0) {
    const splitStr = ' ';
    const wordArr = words.split(splitStr);
    switch (type) {
      case IWordsChangeType.AllInitialUpper:
        return wordArr.map(word => wordChange(word, IWordChangeType.Aaa)).join(splitStr);
      case IWordsChangeType.AllWordUpper:
        return wordArr.map(word => wordChange(word, IWordChangeType.AAA)).join(splitStr);
      default:
        return map(wordArr, (word, index) => wordChange(word, index === 0 ? IWordChangeType.aaa : IWordChangeType.Aaa)).join(splitStr);
    }
  }
  return ''
}
