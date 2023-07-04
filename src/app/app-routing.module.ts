import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { AuthenticationGuard } from './services/auth/guard';
import { CanDeactivateMain } from './services/auth/deactivate';

export enum AppRoute {
  Main = '',
  Settings = 'settings',
  About = 'about',
  WordList = 'word-list',
  Login = 'login',
  Register = 'register',
  Logout = 'logout',
  RequestPassword = 'request-password',
  ResetPassword = 'reset-password',
  Auth = 'auth',
}

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/module').then((m) => m.PagesModule),
    canActivate: [AuthenticationGuard],
    canDeactivate: [CanDeactivateMain],
  },
  {
    path: AppRoute.Auth,
    component: NbAuthComponent,
    children: [
      {
        path: '',
        redirectTo: AppRoute.Login,
        pathMatch: 'prefix',
      },
      {
        path: AppRoute.Login,
        component: NbLoginComponent,
      },
      {
        path: AppRoute.Register,
        component: NbRegisterComponent,
      },
      {
        path: AppRoute.Logout,
        component: NbLogoutComponent,
      },
      {
        path: AppRoute.RequestPassword,
        component: NbRequestPasswordComponent,
      },
      {
        path: AppRoute.ResetPassword,
        component: NbResetPasswordComponent,
      },
    ],
  },

  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
