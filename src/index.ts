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
