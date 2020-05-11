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
      '"Believe to achieve or you never will"',
      'Quote by Aubrey Drake',
      new Date(2020, 2, 27)
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
      new Date(2018, 1, 12)
    ),

    new Goal(
      4,
      '"A goal is just a dream with a deadline"',
      'Quote by A Drake',
      new Date(2019, 0, 18)
    ),

    new Goal(
      5,
      '"I would probably self destruct if i ever lose but i never do"',
      'Quote by Aubrey Drake"',
      new Date(2019, 2, 14)
    ),

    new Goal(
      6,
      '"Tables turn, bridges burn, you live and learn"',
      'Quote by Aubrey Drake Graham',
      new Date(2009, 7, 14)
    ),
  ];

  addNewGoal(goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);
  }

  toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete, index) {
    if (isComplete) {
      this.goals.splice(index, 1);
    }
  }

  deleteGoal(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.goals[index].name}?`
      );

      if (toDelete) {
        this.goals.splice(index, 1);
      }
    }
  }

  constructor() {}

  ngOnInit() {}
}
