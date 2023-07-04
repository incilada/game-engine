import * as MobileDetect from 'mobile-detect';
import { Injectable } from '@angular/core';
import { isPresent } from 'src/app/shared/utils/constants/common';

export enum OperatingSystem {
  AndroidOS = 'AndroidOS',
  BlackBerryOS = 'BlackBerryOS',
  PalmOS = 'PalmOS',
  SymbianOS = 'SymbianOS',
  WindowsMobileOS = 'WindowsMobileOS',
  WindowsPhoneOS = 'WindowsPhoneOS',
  iOS = 'iOS',
  MeeGoOS = 'MeeGoOS',
  MaemoOS = 'MaemoOS',
  JavaOS = 'JavaOS',
  webOS = 'webOS',
  badaOS = 'badaOS',
  BREWOS = 'BREWOS',
  UNKNOWN = 'UNKNOWN',
}

@Injectable({
  providedIn: 'root',
})
export class MobileDetectionService {
  private mobileDetectionAPI: MobileDetect;
  constructor() {
    this.mobileDetectionAPI = new MobileDetect(window.navigator.userAgent);
  }
  public isMobile(): boolean {
    const isMobile = isPresent(this.mobileDetectionAPI.mobile());
    return isMobile || this.isTablet() || this.isPhone();
  }
  public isTablet(): boolean {
    return (
      isPresent(this.mobileDetectionAPI.tablet()) ||
      this.isIpadPro() ||
      this.checkIfTabletFromExceptions()
    );
  }
  public isPhone(): boolean {
    return (
      isPresent(this.mobileDetectionAPI.phone()) ||
      this.checkIfPhoneFromEXceptions()
    );
  }
  public getOS(): OperatingSystem {
    const osString: string = this.mobileDetectionAPI.os();
    const result: OperatingSystem = OperatingSystem[osString];

    if (isPresent(result)) {
      return result;
    } else if (this.isIpadPro()) {
      return OperatingSystem.iOS;
    } else {
      return OperatingSystem.UNKNOWN;
    }
  }

  public getIosVersion(): number {
    return this.mobileDetectionAPI.version('iOS');
  }

  public getAndroidVersion(): number {
    return this.mobileDetectionAPI.version('Android');
  }

  private checkIfTabletFromExceptions(): boolean {
    return false;
  }

  private checkIfPhoneFromEXceptions(): boolean {
    return false;
  }

  private isIpadPro(): boolean {
    if (
      window.navigator.userAgent.match(/Mac/) &&
      window.navigator.maxTouchPoints &&
      window.navigator.maxTouchPoints > 2
    ) {
      return true;
    }
    return false;
  }
}
