import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbIconModule,
  NbButtonModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { PagesModule } from './pages/module';
import { GlobalConstantsToken } from './shared/utils/constants/tokens';
import { GlobalConstants } from './shared/utils/constants/global-constants';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { NbAuthModule } from '@nebular/auth';
import { CoreModule } from './services/core.module';
import { AuthConfig } from './shared/utils/config/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {
  NbFirebaseGoogleStrategy,
  NbFirebasePasswordStrategy,
} from '@nebular/firebase-auth';
import { firebaseConfig } from './shared/utils/config/firebase';
export const isPwaEnabled = environment.isPwa && environment.production;
const config = new AuthConfig().create();

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    PagesModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NbAuthModule.forRoot(config),
    NbIconModule,
    NbButtonModule,
  ],
  providers: [
    { provide: GlobalConstantsToken, useClass: GlobalConstants },
    NbFirebaseGoogleStrategy,
    NbFirebasePasswordStrategy,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
