import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { winnerPatterns } from './utils';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  board = Array.from<{ value: string | null }>({ length: 9 }).fill({
    value: null,
  });

  player = {
    one: 'X',
    two: 'O',
  };

  playerTurner = this.player.one;

  turn = 0;

  isAllowedPlay = true;

  winner: string = '';

  selectedPosition(position: number): void {
    if (!this.board[position].value) {
      this.board[position] = { value: this.playerTurner };
      this.turn++;

      if (this.turn > 4) {
        this.checkResult();
      }
      this.changePlayerTurn();
    }
  }

  changePlayerTurn() {
    this.playerTurner === this.player.one
      ? (this.playerTurner = this.player.two)
      : (this.playerTurner = this.player.one);
  }

  checkResult() {
    for (let winnerPattern of winnerPatterns) {
      if (
        this.board[winnerPattern[0]].value &&
        this.board[winnerPattern[0]].value ===
          this.board[winnerPattern[1]].value &&
        this.board[winnerPattern[1]].value ===
          this.board[winnerPattern[2]].value
      ) {
        console.log('houve um vencedor', this.playerTurner);
        this.isAllowedPlay = false;

        this.winner = this.playerTurner;
        break;
      }
    }

    if (this.turn === 9) {
      console.log('Empate!');
    }
  }
}
