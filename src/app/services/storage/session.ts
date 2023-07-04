import { MxStorage } from './base';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorage extends MxStorage {
  constructor() {
    super(window.sessionStorage);
  }
}
