import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() openRecipeDetails = new EventEmitter<{recipe}>();

  recipes: Recipe[] = [
    new Recipe('lasagna', 'pasta with ground meet', 'https://images.media-allrecipes.com/userphotos/560x315/3359675.jpg'),
    new Recipe('gnocchi', 'gnocchi with ground meet', 'enfants.teamwork.com/#/projects/185389/tasks/board')
  ];

  constructor() { }

  ngOnInit() {
  }

  showRecipeDetails(recipe) {
    console.log('showRecipeDetails event', recipe);
    this.openRecipeDetails.emit({recipe: recipe});
  }  

}
