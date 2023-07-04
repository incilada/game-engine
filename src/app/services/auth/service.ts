import { Injectable } from '@angular/core';
import { isPresent } from 'src/app/shared/utils/constants/common';
import { StorageKey } from '../storage/keys';
import { NbAuthService } from '@nebular/auth';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LocalStorage } from '../storage/local';

@Injectable({ providedIn: 'root' })
export class AuthService {
  authInfo = new BehaviorSubject(null);
  constructor(
    private localStorage: LocalStorage,
    private nbAuthService: NbAuthService
  ) {
    this.listenAuthentication();
  }

  isLogin(): Observable<boolean> {
    return of(isPresent(this.localStorage.getObject(StorageKey.AuthResult)));
  }

  listenAuthentication(): void {
    this.nbAuthService.onAuthenticationChange().subscribe((value) => {
      this.authInfo.next(this.localStorage.getObject(StorageKey.AuthResult));
    });
  }
}
