import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-challeng',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './challeng.component.html',
  styleUrl: './challeng.component.scss'
})
export class ChallengComponent {
  public wordOfTheDay: string = '';
  public http = inject(HttpClient);

  loadWordOfTheDay(): void {
    this.http.get<string[]>('https://random-word-api.herokuapp.com/word')
      .subscribe({ next: (response) => {
        this.wordOfTheDay = response[0];
      } })
  }

  ngOnInit(): void {
    this.loadWordOfTheDay();
  }
}
