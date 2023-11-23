import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { ChallengComponent } from './challeng/challeng.component';

@Component({
  selector: 'app-hangman',
  standalone: true,
  imports: [CommonModule, AlphabetComponent, ChallengComponent],
  templateUrl: './hangman.component.html',
  styleUrl: './hangman.component.scss'
})
export class HangmanComponent {
  public selectedLetters: string[] = [];

  getLastLetterSelected(letter: string): void {
    this.selectedLetters.push(letter);
  }
}
