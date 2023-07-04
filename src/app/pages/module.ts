import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/component';
import { AboutComponent } from './about/component';
import { MainComponent } from './main/component';
import { GameComponent } from './game/component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoute } from '../app-routing.module';
import { GamesModule } from './games/module';
import { NbButtonModule, NbIconModule } from '@nebular/theme';
import { GameService } from '../services/game/service';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: AppRoute.About,
    component: AboutComponent,
  },
  {
    path: AppRoute.Settings,
    component: SettingsComponent,
  },
];

@NgModule({
  declarations: [
    SettingsComponent,
    AboutComponent,
    MainComponent,
    GameComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GamesModule,
    NbButtonModule,
    NbIconModule,
  ],
  exports: [RouterModule],
  providers: [GameService],
})
export class PagesModule {}
