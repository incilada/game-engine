import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoute } from 'src/app/app-routing.module';
import { Game } from 'src/app/services/game/model';
import { GameService } from 'src/app/services/game/service';

@Component({
  selector: 'app-main',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class MainComponent implements OnInit {
  constructor(public gameService: GameService, private router: Router) {}

  ngOnInit(): void {}

  openGame(game: Game): void {
    this.gameService.openGame(game);
  }

  openSettingsPage(): void {
    this.router.navigateByUrl('/' + AppRoute.Settings);
  }

  openAboutPage(): void {
    this.router.navigateByUrl('/' + AppRoute.About);
  }
}
