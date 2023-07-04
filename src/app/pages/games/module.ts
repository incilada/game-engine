import { NgModule } from '@angular/core';
import { WordleComponent } from './wordle/component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [WordleComponent],
  imports: [CommonModule],
  exports: [],
})
export class GamesModule {}
