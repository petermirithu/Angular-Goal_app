import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  goals:Goal[] = [
    new Goal( 1, 'Become a PRO at Software Development.', 'Find all ways of being a PRO'),
    new Goal( 2, 'Learn how to find loop holes in a machine.', 'Get all metasploit tools'),
    new Goal( 3, 'Get equipped in ICT security.', 'learn how to use metasploit'),
    ];  

    toggleDetails(index){
      this.goals[index].showDescription = !this.goals[index].showDescription;
    }
    deleteGoal(isComplete, index){
      if(isComplete){
        let toDelete = confirm(`Are you sure you wanna delete ${this.goals[index].name}?`)

      if (toDelete) {
        this.goals.splice(index,1);
      }
    }      
  GoalComponent.constructor(); { }

  this.ngOnInit(); {
  }
  }
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
}
