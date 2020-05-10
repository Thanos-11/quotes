import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    new Goal(
      1,
      'Believe to achieve or you never will',
      'Quote by Aubrey Drake'
    ),

    new Goal(2, 'A wise man once said nothing at all', 'Quote by Drake'),

    new Goal(
      3,
      'You know its real when you are who you think you are',
      'Quote by A Drake Graham'
    ),

    new Goal(4, 'A goal is just a dream with a deadline', 'Quote by A Drake'),

    new Goal(
      5,
      'I would prolly self destruct if i ever lose but i never do',
      'Quote by Aubrey Drake'
    ),

    new Goal(
      6,
      'Tables turn, bridges burn, you live and learn',
      'Quote by Aubrey Drake Graham'
    ),
  ];

  toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  constructor() {}

  ngOnInit() {}
}
