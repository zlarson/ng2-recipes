import {Component} from 'angular2/core';
import {RecipesComponent} from './recipe-book/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component'
import {RouteConfig} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-app',
    template: `
        <nav class="navbar navbar-default navbar-inverse">
		  <div class="container">
		    <div class="navbar-collapse">
      			<ul class="nav navbar-nav">
        			<li><a [routerLink]="['Recipes']">Recipes</a></li>
        			<li><a [routerLink]="['ShoppingList']">Shopping List</a></li>
        		</ul>
        	</div>
		  </div>
		</nav>
        <div class="container">
        	<router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: '/recipes/...', name: 'Recipes', component: RecipesComponent, useAsDefault: true },
	{ path: '/shopping-list', name: 'ShoppingList', component: ShoppingListComponent }
])
export class AppComponent {

}
