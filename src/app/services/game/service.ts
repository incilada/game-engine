import { Injectable } from '@angular/core';
import { Game } from './model';
import { GameFactory } from './factory';

Injectable();
export class GameService {
  gameList: Game[] = [];

  constructor() {
    this.createGames();
  }

  createGames(): void {
    this.gameList = new GameFactory().create();
  }

  openGame(game: Game): void {}
}
