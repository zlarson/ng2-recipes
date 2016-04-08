System.register(['angular2/core', 'angular2/router', './recipe-service'], function(exports_1, context_1) {
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
    var core_1, router_1, recipe_service_1;
    var RecipeListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (recipe_service_1_1) {
                recipe_service_1 = recipe_service_1_1;
            }],
        execute: function() {
            RecipeListComponent = (function () {
                function RecipeListComponent(_recipeService, _router) {
                    this._recipeService = _recipeService;
                    this._router = _router;
                }
                RecipeListComponent.prototype.ngOnInit = function () {
                    this.recipes = this._recipeService.getAllRecipes();
                };
                RecipeListComponent.prototype.onSelect = function (item) {
                    this._router.navigate(['RecipeDetail', { recipeIndex: Number(this._recipeService.getRecipeIndex(item)) }]); //imperative routing
                };
                RecipeListComponent.prototype.onAddRecipe = function () {
                    this._router.navigate(['RecipeEdit', { editMode: 'create' }]);
                };
                RecipeListComponent = __decorate([
                    core_1.Component({
                        selector: 'my-recipe-list',
                        template: "\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">All Recipes</h3>\n      </div>\n      <div class=\"panel-body\">\n        <button class=\"btn\" (click)=\"onAddRecipe()\">Add Recipe!</button>\n   <br/>\n   <br/>\n       <ul class=\"media-list\">\n        <li class=\"media\" *ngFor=\"#item of recipes\" (click)=\"onSelect(item)\">\n          <div class=\"media-left\">\n              <img class=\"media-object thumbnail\" [src]=\"item.imageUrl\" style=\"width: 200px;\">\n          </div>\n          <div class=\"media-body\">\n            <h4 class=\"media-heading\">{{item.name}}</h4>\n          </div>\n        </li>\n      </ul>\n      </div>\n    </div>\n\n\t \n\t"
                    }), 
                    __metadata('design:paramtypes', [recipe_service_1.RecipeService, router_1.Router])
                ], RecipeListComponent);
                return RecipeListComponent;
            }());
            exports_1("RecipeListComponent", RecipeListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdDQTtnQkFHRSw2QkFBb0IsY0FBNkIsRUFBVSxPQUFlO29CQUF0RCxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO2dCQUFFLENBQUM7Z0JBRTdFLHNDQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyRCxDQUFDO2dCQUVELHNDQUFRLEdBQVIsVUFBUyxJQUFhO29CQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjtnQkFDbEksQ0FBQztnQkFFRCx5Q0FBVyxHQUFYO29CQUNNLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEUsQ0FBQztnQkExQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsZ3VCQXVCVDtxQkFDRCxDQUFDOzt1Q0FBQTtnQkFpQkYsMEJBQUM7WUFBRCxDQWhCQSxBQWdCQyxJQUFBO1lBaEJELHFEQWdCQyxDQUFBIiwiZmlsZSI6InJlY2lwZS1ib29rL3JlY2lwZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtSZWNpcGV9IGZyb20gJy4uL3NoYXJlZC9yZWNpcGUnO1xyXG5pbXBvcnQge1JlY2lwZVNlcnZpY2V9IGZyb20gJy4vcmVjaXBlLXNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdteS1yZWNpcGUtbGlzdCcsXHJcblx0dGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwicGFuZWwtdGl0bGVcIj5BbGwgUmVjaXBlczwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiAoY2xpY2spPVwib25BZGRSZWNpcGUoKVwiPkFkZCBSZWNpcGUhPC9idXR0b24+XHJcbiAgIDxici8+XHJcbiAgIDxici8+XHJcbiAgICAgICA8dWwgY2xhc3M9XCJtZWRpYS1saXN0XCI+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwibWVkaWFcIiAqbmdGb3I9XCIjaXRlbSBvZiByZWNpcGVzXCIgKGNsaWNrKT1cIm9uU2VsZWN0KGl0ZW0pXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtbGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJtZWRpYS1vYmplY3QgdGh1bWJuYWlsXCIgW3NyY109XCJpdGVtLmltYWdlVXJsXCIgc3R5bGU9XCJ3aWR0aDogMjAwcHg7XCI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1lZGlhLWhlYWRpbmdcIj57e2l0ZW0ubmFtZX19PC9oND5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG5cdCBcclxuXHRgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWNpcGVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICByZWNpcGVzOiBSZWNpcGVbXTtcdFxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZWNpcGVTZXJ2aWNlOiBSZWNpcGVTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcil7fVxyXG5cclxuICBuZ09uSW5pdCgpOiBhbnl7XHJcbiAgICB0aGlzLnJlY2lwZXMgPSB0aGlzLl9yZWNpcGVTZXJ2aWNlLmdldEFsbFJlY2lwZXMoKTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0KGl0ZW0gOiBSZWNpcGUpe1xyXG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnUmVjaXBlRGV0YWlsJywgeyByZWNpcGVJbmRleDogTnVtYmVyKHRoaXMuX3JlY2lwZVNlcnZpY2UuZ2V0UmVjaXBlSW5kZXgoaXRlbSkpIH1dKTsgLy9pbXBlcmF0aXZlIHJvdXRpbmdcclxuICB9XHJcblxyXG4gIG9uQWRkUmVjaXBlKCkge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1JlY2lwZUVkaXQnLCB7ZWRpdE1vZGU6ICdjcmVhdGUnfV0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
