import { Component } from '@angular/core';
import { Goal } from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  goals: Goal[] = [
    { id: 1, name: 'Believe to achieve or you never will' },
    { id: 2, name: 'A wise man once said nothing at all' },
    { id: 3, name: 'You know its real when you are who you think you are' },
    { id: 4, name: 'A goal is just a dream with a deadline' },
    {
      id: 5,
      name: 'I would prolly self destruct if i ever lose but i never do',
    },
    { id: 6, name: 'Tables turn, bridges burn, you live and learn' },
  ];
}
