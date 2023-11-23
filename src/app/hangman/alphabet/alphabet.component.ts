import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Option {
  value: string;
  selected: boolean;
}

@Component({
  selector: 'app-alphabet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alphabet.component.html',
  styleUrl: './alphabet.component.scss'
})
export class AlphabetComponent {
  @Output() letter = new EventEmitter<string>;
  public letters: Option[] = []

  /**
   * getAlphabet
   */
  public getAlphabet(): Option[] {
    const alphabetSize = 26;
    const alpha = Array.from(Array(alphabetSize)).map((e, i) => i + 65);
    return alpha.map((x) => ({ value: String.fromCharCode(x), selected: false}));
  }

  sendLetter(letterSelected: Option): void {
    letterSelected.selected = true;
    this.letter.emit(letterSelected.value);

    console.log(letterSelected);
  }

  ngOnInit(): void {
    this.letters = this.getAlphabet();
  }

}
