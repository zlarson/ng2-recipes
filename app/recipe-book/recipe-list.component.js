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
                RecipeListComponent = __decorate([
                    core_1.Component({
                        selector: 'my-recipe-list',
                        template: "\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">All Recipes</h3>\n      </div>\n      <div class=\"panel-body\">\n        <button class=\"btn\">Add Recipe</button>\n   <br/>\n   <br/>\n   <ul class=\"media-list\">\n    <li class=\"media\" *ngFor=\"#item of recipes\" (click)=\"onSelect(item)\">\n      <div class=\"media-left\">\n          <img class=\"media-object thumbnail\" [src]=\"item.imageUrl\" style=\"width: 200px;\">\n      </div>\n      <div class=\"media-body\">\n        <h4 class=\"media-heading\">{{item.name}}</h4>\n      </div>\n    </li>\n  </ul>\n      </div>\n    </div>\n\n\t \n\t"
                    }), 
                    __metadata('design:paramtypes', [recipe_service_1.RecipeService, router_1.Router])
                ], RecipeListComponent);
                return RecipeListComponent;
            }());
            exports_1("RecipeListComponent", RecipeListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdDQTtnQkFHRSw2QkFBb0IsY0FBNkIsRUFBVSxPQUFlO29CQUF0RCxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO2dCQUFFLENBQUM7Z0JBRTdFLHNDQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyRCxDQUFDO2dCQUVELHNDQUFRLEdBQVIsVUFBUyxJQUFhO29CQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjtnQkFDbEksQ0FBQztnQkF0Q0g7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsNnBCQXVCVDtxQkFDRCxDQUFDOzt1Q0FBQTtnQkFhRiwwQkFBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQscURBWUMsQ0FBQSIsImZpbGUiOiJyZWNpcGUtYm9vay9yZWNpcGUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7UmVjaXBlfSBmcm9tICcuLi9zaGFyZWQvcmVjaXBlJztcclxuaW1wb3J0IHtSZWNpcGVTZXJ2aWNlfSBmcm9tICcuL3JlY2lwZS1zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnbXktcmVjaXBlLWxpc3QnLFxyXG5cdHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlxyXG4gICAgICAgIDxoMyBjbGFzcz1cInBhbmVsLXRpdGxlXCI+QWxsIFJlY2lwZXM8L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCI+QWRkIFJlY2lwZTwvYnV0dG9uPlxyXG4gICA8YnIvPlxyXG4gICA8YnIvPlxyXG4gICA8dWwgY2xhc3M9XCJtZWRpYS1saXN0XCI+XHJcbiAgICA8bGkgY2xhc3M9XCJtZWRpYVwiICpuZ0Zvcj1cIiNpdGVtIG9mIHJlY2lwZXNcIiAoY2xpY2spPVwib25TZWxlY3QoaXRlbSlcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWxlZnRcIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJtZWRpYS1vYmplY3QgdGh1bWJuYWlsXCIgW3NyY109XCJpdGVtLmltYWdlVXJsXCIgc3R5bGU9XCJ3aWR0aDogMjAwcHg7XCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgIDxoNCBjbGFzcz1cIm1lZGlhLWhlYWRpbmdcIj57e2l0ZW0ubmFtZX19PC9oND5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG5cdCBcclxuXHRgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWNpcGVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICByZWNpcGVzOiBSZWNpcGVbXTtcdFxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZWNpcGVTZXJ2aWNlOiBSZWNpcGVTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcil7fVxyXG5cclxuICBuZ09uSW5pdCgpOiBhbnl7XHJcbiAgICB0aGlzLnJlY2lwZXMgPSB0aGlzLl9yZWNpcGVTZXJ2aWNlLmdldEFsbFJlY2lwZXMoKTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0KGl0ZW0gOiBSZWNpcGUpe1xyXG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnUmVjaXBlRGV0YWlsJywgeyByZWNpcGVJbmRleDogTnVtYmVyKHRoaXMuX3JlY2lwZVNlcnZpY2UuZ2V0UmVjaXBlSW5kZXgoaXRlbSkpIH1dKTsgLy9pbXBlcmF0aXZlIHJvdXRpbmdcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
