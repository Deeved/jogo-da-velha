import { Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { HangmanComponent } from './hangman/hangman.component';

export const routes: Routes = [
  {
    path: 'velha',
    component: GameComponent,
  },
  {
    path: '',
    component: HangmanComponent,
  },
];
