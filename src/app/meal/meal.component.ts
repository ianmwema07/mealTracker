import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  meals:Meal[] = [
    {id:0, mealName:"Rice", calories:0},
    {id:1, mealName:"Ugali", calories:0},
    {id:2, mealName:"Githeri", calories:0},
    {id:3, mealName:"Spaghetti", calories:0}
  ]

}
