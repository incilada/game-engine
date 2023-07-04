import { isPresent } from '../constants/common';

export class StringHelper {
  public static isString(value: any): boolean {
    return isPresent(value) && typeof value === 'string';
  }

  public static replaceAll(source: string, find: string, replace: string) {
    return source.replace(new RegExp(find, 'g'), replace);
  }

  public static toByteArray(str: string, encoding: string): Uint8Array {
    // ASCII karakterler için sorunsuz çalışır.
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return bufView;
  }

  public static rpad(text: string, lenght: number, fill: string): string {
    if (text.length >= lenght) {
      return text;
    } else {
      const count = Math.ceil((lenght - text.length) / fill.length);
      for (let i = 0; i < count; i++) {
        text = text + fill;
      }
      return text.substr(0, lenght);
    }
    //   console.log(`${StringHelper.rpad('3', 2, 'A')} should be 3A`);
    //   console.log(`${StringHelper.rpad('51', 2, 'A')} should be 51`);
    //   console.log(`${StringHelper.rpad('510', 2, 'A')} should be 510`);
    //   console.log(`${StringHelper.rpad('5', 3, 'AA')} should be 5AA`);
    //   console.log(`${StringHelper.rpad('5', 4, 'AB')} should be 5ABA`);
  }
}
