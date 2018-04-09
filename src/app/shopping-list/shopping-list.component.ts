import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '../../../basics-assignment-1-start/basics-assignment-1-start/node_modules/@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 3)
  ];
  private subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() { //good practice to put all initializations in this method
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEditItem(id) {
    this.slService.startedEditing.next(id);
  }

}
