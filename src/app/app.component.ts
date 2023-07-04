import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { ThemeService } from './services/theme/service';
import { AuthService } from './services/auth/service';
import { isPresent } from './shared/utils/constants/common';
import { PageZoomService } from './services/mobile/zoom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'game-engine';
  isVisible = false;

  constructor(
    private zoomService: PageZoomService,
    public authService: AuthService,
    private themeService: ThemeService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.themeService.loadInitialTheme();
    this.listenAuthResult();
    this.zoomService.init();
  }

  listenAuthResult(): void {
    this.authService.authInfo.subscribe((result) => {
      this.isVisible = isPresent(result) && result.value?.trim().length > 0;
      this.changeDetector.detectChanges();
    });
  }
}
