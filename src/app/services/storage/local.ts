import { MxStorage } from './base';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorage extends MxStorage {
  constructor() {
    super(window.localStorage);
  }
}
