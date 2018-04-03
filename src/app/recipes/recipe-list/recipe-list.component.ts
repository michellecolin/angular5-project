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
    new Recipe('gnocchi', 'gnocchi with ground meet', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/12/23/1/FNmag_Gnocchi-NiCoise-ima_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371589316215.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

  showRecipeDetails(recipe) {
    console.log('showRecipeDetails event', recipe);
    this.openRecipeDetails.emit({recipe: recipe});
  }  

}
