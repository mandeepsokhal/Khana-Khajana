import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test','A simply for testing','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another test','Another for testing','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  
  ];
  @Output() OnRecipeClick = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }
  OnRecipeSelection(recipeOnSelected : Recipe)
  {
    this.OnRecipeClick.emit(recipeOnSelected);
  }
}
