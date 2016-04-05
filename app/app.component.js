System.register(['angular2/core', './recipe-book/recipes.component', './shopping-list/shopping-list.component', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, recipes_component_1, shopping_list_component_1, router_1, router_2;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (recipes_component_1_1) {
                recipes_component_1 = recipes_component_1_1;
            },
            function (shopping_list_component_1_1) {
                shopping_list_component_1 = shopping_list_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <nav class=\"navbar navbar-default navbar-inverse\">\n\t\t  <div class=\"container\">\n\t\t    <div class=\"navbar-collapse\">\n      \t\t\t<ul class=\"nav navbar-nav\">\n        \t\t\t<li><a [routerLink]=\"['Recipes']\">Recipes</a></li>\n        \t\t\t<li><a [routerLink]=\"['ShoppingList']\">Shopping List</a></li>\n        \t\t</ul>\n        \t</div>\n\t\t  </div>\n\t\t</nav>\n        <div class=\"container\">\n        \t<router-outlet></router-outlet>\n        </div>\n    ",
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/recipes/...', name: 'Recipes', component: recipes_component_1.RecipesComponent, useAsDefault: true },
                        { path: '/shopping-list', name: 'ShoppingList', component: shopping_list_component_1.ShoppingListComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNkJBO2dCQUFBO2dCQUVBLENBQUM7Z0JBekJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSwyZUFjVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztxQkFDbEMsQ0FBQztvQkFDRCxvQkFBVyxDQUFDO3dCQUNaLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFO3dCQUMxRixFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSwrQ0FBcUIsRUFBRTtxQkFDbEYsQ0FBQzs7Z0NBQUE7Z0JBR0YsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UmVjaXBlc0NvbXBvbmVudH0gZnJvbSAnLi9yZWNpcGUtYm9vay9yZWNpcGVzLmNvbXBvbmVudCc7XG5pbXBvcnQge1Nob3BwaW5nTGlzdENvbXBvbmVudH0gZnJvbSAnLi9zaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QuY29tcG9uZW50J1xuaW1wb3J0IHtSb3V0ZUNvbmZpZ30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1pbnZlcnNlXCI+XG5cdFx0ICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0ICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItY29sbGFwc2VcIj5cbiAgICAgIFx0XHRcdDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2XCI+XG4gICAgICAgIFx0XHRcdDxsaT48YSBbcm91dGVyTGlua109XCJbJ1JlY2lwZXMnXVwiPlJlY2lwZXM8L2E+PC9saT5cbiAgICAgICAgXHRcdFx0PGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnU2hvcHBpbmdMaXN0J11cIj5TaG9wcGluZyBMaXN0PC9hPjwvbGk+XG4gICAgICAgIFx0XHQ8L3VsPlxuICAgICAgICBcdDwvZGl2PlxuXHRcdCAgPC9kaXY+XG5cdFx0PC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgXHQ8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxufSlcbkBSb3V0ZUNvbmZpZyhbXG5cdHsgcGF0aDogJy9yZWNpcGVzLy4uLicsIG5hbWU6ICdSZWNpcGVzJywgY29tcG9uZW50OiBSZWNpcGVzQ29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6IHRydWUgfSxcblx0eyBwYXRoOiAnL3Nob3BwaW5nLWxpc3QnLCBuYW1lOiAnU2hvcHBpbmdMaXN0JywgY29tcG9uZW50OiBTaG9wcGluZ0xpc3RDb21wb25lbnQgfVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
