import { isPresent } from 'src/app/shared/utils/constants/common';
import { StorageKey } from '../storage/keys';
import { LocalStorage } from '../storage/local';
import { DocSiteThemes, DocsSiteTheme } from './themes';
import { StyleManager } from './style-manager';
import { Injectable } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { VersionHelper } from 'src/app/shared/utils/various/version';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  protected styleManager: StyleManager = new StyleManager();
  constructor(
    private localStorage: LocalStorage,
    private nbThemeService: NbThemeService
  ) {}

  public loadInitialTheme(): HTMLLinkElement {
    const currentTheme = this.getCurrentTheme();
    let linkEl: HTMLLinkElement;
    const ver = VersionHelper.getAppVersion();
    if (isPresent(currentTheme)) {
      const newTheme = this.getThemeFromName(currentTheme.name);
      linkEl = this.styleManager.setStyle(
        'theme',
        `assets/scss/${newTheme.href + '?v=' + ver}`
      );
    } else {
      const newTheme = this.getDefaultTheme();
      linkEl = this.styleManager.setStyle(
        'theme',
        `assets/scss/${newTheme.href + '?v=' + ver}`
      );
      this.localStorage.setObject(StorageKey.CurrentTheme, newTheme);
    }
    this.nbThemeService.changeTheme(
      this.localStorage.getObject(StorageKey.CurrentTheme).name
    );
    return linkEl;
  }

  changeTheme(themeName: string): void {
    this.nbThemeService.changeTheme(themeName);
    this.localStorage.setObject(
      StorageKey.CurrentTheme,
      this.getThemeFromName(themeName)
    );
  }

  getCurrentTheme(): DocsSiteTheme {
    return this.localStorage.getObject(
      StorageKey.CurrentTheme
    ) as DocsSiteTheme;
  }

  public getActiveTheme(): DocsSiteTheme {
    let theme = this.getCurrentTheme();
    if (!isPresent(theme)) {
      theme = this.getDefaultTheme();
    }
    return theme;
  }

  public getThemeFromName(name: string): DocsSiteTheme {
    return DocSiteThemes.find((theme) => theme.name === name);
  }

  private getDefaultTheme(): DocsSiteTheme {
    return DocSiteThemes.find((theme) => theme.isDefault === true);
  }
}
