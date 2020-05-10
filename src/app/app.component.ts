import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  goals: string[];

  constructor() {
    this.goals = [
      'Believe to achieve or you never will',
      'A wise man once said nothing at all',
      'Tables turn, bridges burn, you live and learn',
    ];
  }
}
