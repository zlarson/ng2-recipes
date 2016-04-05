import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Recipe} from '../shared/recipe';
import {RecipeService} from './recipe-service';

@Component({
	selector: 'my-recipe-list',
	template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">All Recipes</h3>
      </div>
      <div class="panel-body">
        <button class="btn">Add Recipe</button>
   <br/>
   <br/>
   <ul class="media-list">
    <li class="media" *ngFor="#item of recipes" (click)="onSelect(item)">
      <div class="media-left">
          <img class="media-object thumbnail" [src]="item.imageUrl" style="width: 200px;">
      </div>
      <div class="media-body">
        <h4 class="media-heading">{{item.name}}</h4>
      </div>
    </li>
  </ul>
      </div>
    </div>

	 
	`
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];	

  constructor(private _recipeService: RecipeService, private _router: Router){}

  ngOnInit(): any{
    this.recipes = this._recipeService.getAllRecipes();
  }

  onSelect(item : Recipe){
    this._router.navigate(['RecipeDetail', { recipeIndex: Number(this._recipeService.getRecipeIndex(item)) }]); //imperative routing
  }
}