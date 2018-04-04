import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe(
      'lasagna', 
      'pasta with ground meet', 
      'https://images.media-allrecipes.com/userphotos/560x315/3359675.jpg', 
      [
        new Ingredient('Meat', 1),
        new Ingredient('lettuce', 2)
      ]
    ),
    new Recipe(
      'gnocchi', 
      'gnocchi with ground meet', 
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/12/23/1/FNmag_Gnocchi-NiCoise-ima_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371589316215.jpeg', 
      [
        new Ingredient('Meat', 1),
        new Ingredient('lettuce', 2)
      ]
    )
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice(); //return copy not the reference
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}