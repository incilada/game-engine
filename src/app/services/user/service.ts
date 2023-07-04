import { Injectable, Inject } from '@angular/core';
import { isPresent } from 'src/app/shared/utils/constants/common';
import { GlobalConstants } from 'src/app/shared/utils/constants/global-constants';
import { GlobalConstantsToken } from 'src/app/shared/utils/constants/tokens';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    @Inject(GlobalConstantsToken) public globalConstants: GlobalConstants
  ) {}
  destroy(): void {
    throw new Error('Method not implemented.');
  }

  public isLogin(): boolean {
    return isPresent(sessionStorage.getItem('login'));
  }
}
