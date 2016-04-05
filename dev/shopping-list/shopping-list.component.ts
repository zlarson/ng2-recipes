import {Component, OnInit} from 'angular2/core';
import {ShoppingListEditComponent} from './shopping-list-edit.component';
import {Ingredient} from '../shared/ingredient';
import {ShoppingListService} from '../shared/shopping-list.service';

@Component({
	template: `
		<h2>Shopping List</h2>
		<div class="row">
			<div class="col-md-3">
				<h4>Shopping List Items</h4>
				<button class="btn" (click)="onAddItem()">Add New Item</button>
				<ul>
					<li *ngFor="#item of shoppingList" (click)="onSelect(item)">
						{{item.name}} ({{item.amount}})
					</li>
				</ul>
			</div>
			<div class="col-md-9">
				<my-shopping-list-edit [ingredient]="selectedItem"></my-shopping-list-edit>
			</div>
		</div>		
	`,
	directives: [ShoppingListEditComponent],
	providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
	shoppingList: Ingredient[];
	selectedItem: Ingredient = null;

	constructor(private _shoppingListService: ShoppingListService){ }

	onAddItem() {
		this.selectedItem = null;
	}

	ngOnInit(): any {
		this.shoppingList = this._shoppingListService.getAllItems();
	}

	onSelect(item: Ingredient) {
		this.selectedItem = item;
	}
}