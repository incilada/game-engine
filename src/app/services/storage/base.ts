import { isPresent } from 'src/app/shared/utils/constants/common';
import { StorageKey } from './keys';

export abstract class MxStorage {
  constructor(protected storage: Storage) {}

  getObject(key: StorageKey): any {
    const textContent = this.storage.getItem(key);
    if (!isPresent(textContent)) {
      return null;
    }
    return JSON.parse(textContent as string);
  }

  setObject(key: StorageKey, value: any): void {
    if (!isPresent(value)) {
      return this.removeItem(key);
    }
    return this.storage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: StorageKey): void {
    this.storage.removeItem(key);
  }

  clear(exceptionList?: StorageKey[]): void {
    Object.values(StorageKey).forEach((storageKey: StorageKey) => {
      if (
        !isPresent(exceptionList) ||
        exceptionList?.indexOf(storageKey) === -1
      ) {
        this.removeItem(storageKey);
      }
    });
  }
}
