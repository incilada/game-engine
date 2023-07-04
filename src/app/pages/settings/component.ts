import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/service';
import { DocsSiteTheme } from 'src/app/services/theme/themes';

@Component({
  selector: 'app-settings',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class SettingsComponent implements OnInit {
  currentTheme: DocsSiteTheme;
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.currentTheme = this.themeService.getActiveTheme();
  }

  changeTheme(themeName: string): void {
    this.themeService.changeTheme(themeName);
    // this.selectedTheme = this.themeService.currentTheme;
  }
}
