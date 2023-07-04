import { NgModule } from '@angular/core';
import { AuthService } from './auth/service';
import { AuthenticationGuard } from './auth/guard';
import { UserService } from './user/service';
import { FirebaseAPIService } from './firebase/service';
import { CanDeactivateMain } from './auth/deactivate';
import { ThemeService } from './theme/service';
import { MobileDetectionService } from './mobile/detection';
import { PageZoomService } from './mobile/zoom';

@NgModule({
  providers: [
    AuthService,
    UserService,
    AuthenticationGuard,
    FirebaseAPIService,
    CanDeactivateMain,
    ThemeService,
    MobileDetectionService,
    PageZoomService,
  ],
})
export class CoreModule {}
