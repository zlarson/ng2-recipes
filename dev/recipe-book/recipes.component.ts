import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {RecipeService} from './recipe-service';
import {RecipeListComponent} from './recipe-list.component';
import {RecipeDetailComponent} from './recipe-detail.component';
import {RecipeEditComponent} from './recipe-edit.component';

@Component({
	selector: 'my-recipes',
	template: `
		<h2>Recipes</h2>
		<div class="row">
			<div class="col-md-4">
				<my-recipe-list></my-recipe-list>
			</div>
			<div class="col-md-8">
				<router-outlet></router-outlet>
			</div>
		</div>
	`,
	providers: [RecipeService],
	directives: [RecipeListComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path:'/', name: 'RecipeDetail', component: RecipeDetailComponent, useAsDefault: true},
	{path: '/:editMode', name: 'RecipeEdit', component: RecipeEditComponent}
])
export class RecipesComponent {
	
}