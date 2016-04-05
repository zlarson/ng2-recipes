import {Component, OnInit} from 'angular2/core';
import {Recipe} from '../shared/recipe';
import {RecipeService} from './recipe-service'
import {RouteParams} from 'angular2/router';

@Component({
	templateUrl: 'templates/recipes/recipe-detail.tpl.html' 
})
export class RecipeDetailComponent implements OnInit {
	recipe: Recipe;
	private _recipeIndex: string;

	constructor(private _routeParams: RouteParams, private _recipeService: RecipeService){}
	
	ngOnInit(): any{
		let itemIndex = this._routeParams.get('recipeIndex');

		this._recipeIndex = itemIndex;

		//+itemIndex converts string to number
		this.recipe = this._recipeService.getRecipe(itemIndex !== null ? +itemIndex : null) || null;
	}
}