import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscribe;
  editMode = false;
  editItemIndex: number;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscribe = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editMode = false;
          this.editItemIndex = index;
        }
      );
  }

  onAddItem(form) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.slService.addIngredient(newIngredient);
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
