import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('lasagna', 'pasta with ground meet', 'https://images.media-allrecipes.com/userphotos/560x315/3359675.jpg'),
    new Recipe('lasagna', 'pasta with ground meet', 'https://images.media-allrecipes.com/userphotos/560x315/3359675.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
