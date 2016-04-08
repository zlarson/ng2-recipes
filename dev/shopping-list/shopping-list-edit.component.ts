import {Component} from 'angular2/core';
import {Ingredient} from '../shared/ingredient';
import {ShoppingListService} from '../shared/shopping-list.service';

@Component({
	selector: 'my-shopping-list-edit',
	template: `
		<h4>{{ingredient === null ? 'Add' : 'Edit'}} Item</h4>
		<form id="shopping-list-add" (ngSubmit)="onSubmit(f.value)" #f="ngForm">
			<label for="item-name">Name</label>
			<input type="text" id="item-name" required [ngModel]="ingredient?.name" ngControl="name">
			<label for="item-amount">Amount</label>
			<input type="text" id="item-amount" required [ngModel]="ingredient?.amount" ngControl="amount">
			<button class="btn btn-primary" type="submit">{{ingredient === null ? 'Create' : 'Update'}}</button>
			<button class="btn btn-danger" *ngIf="ingredient !== null" (click)="onDelete()">Remove Item</button>
		</form>
	`,
	inputs: ['ingredient']
})
export class ShoppingListEditComponent {
	ingredient: Ingredient;

	constructor(private _shoppingListService: ShoppingListService){}

	onSubmit(item: Ingredient){
		//update or add depending on this.ingredient existing
		this.ingredient !== null ? 
			this._shoppingListService.updateItem(this._shoppingListService.getIndexOfItem(this.ingredient), item) :
			this._shoppingListService.insertItem(item);
	}

	onDelete(){
		this._shoppingListService.deleteItem(this.ingredient);
		this.ingredient = null;
	}
}