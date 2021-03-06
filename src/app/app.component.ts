import { Component } from '@angular/core';
import { Goal } from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  goals: Goal[] = [
    new Goal(
      1,
      '"Believe to achieve or you never will"',
      'Quote by Aubrey Drake',
      new Date(2020, 3, 14)
    ),

    new Goal(
      2,
      '"A wise man once said nothing at all"',
      'Quote by Drake',
      new Date(2019, 6, 9)
    ),

    new Goal(
      3,
      '"You know its real when you are who you think you are"',
      'Quote by A Drake Graham',
      new Date(2022, 1, 12)
    ),

    new Goal(
      4,
      '"A goal is just a dream with a deadline"',
      'Quote by A Drake',
      new Date(2019, 0, 18)
    ),

    new Goal(
      5,
      '"I would prolly self destruct if i ever lose but i never do"',
      'Quote by Aubrey Drake"',
      new Date(2019, 2, 14)
    ),

    new Goal(
      6,
      '"Tables turn, bridges burn, you live and learn"',
      'Quote by Aubrey Drake Graham',
      new Date(2030, 3, 14)
    ),
  ];
}
