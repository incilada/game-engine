import { isDevMode } from '@angular/core';
import { StringHelper } from '../types/string';

export class VersionHelper {
  public static getAppVersion(): string {
    const keyAppVer = 'APP_VERSION';
    return window[keyAppVer] + '.' + VersionHelper.getBuildNo();
  }

  public static getBuildNo(): string {
    const keyBuildNo = 'BUILD_NUMBER';
    if (window[keyBuildNo] === 'undefined') {
      window[keyBuildNo] = '0';
    }
    return window[keyBuildNo];
  }

  public static versionToNumber(version: string): number {
    const str =
      StringHelper.rpad(version.split('.')[0], 2, '0') +
      StringHelper.rpad(version.split('.')[1], 2, '0') +
      StringHelper.rpad(version.split('.')[2], 2, '0') +
      StringHelper.rpad(version.split('.')[3], 7, '0');
    return parseInt(str, 10);
  }

  public static isVersionValid(version: string) {
    return (
      isDevMode() ||
      VersionHelper.versionToNumber(VersionHelper.getAppVersion()) >=
        VersionHelper.versionToNumber(version)
    );
  }
}
