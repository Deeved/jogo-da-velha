import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  padroesDeVitorias = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

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
    for (let padraoVitoria of this.padroesDeVitorias) {
      if (
        this.board[padraoVitoria[0]].value &&
        this.board[padraoVitoria[0]].value ===
          this.board[padraoVitoria[1]].value &&
        this.board[padraoVitoria[1]].value ===
          this.board[padraoVitoria[2]].value
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
