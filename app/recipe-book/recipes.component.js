System.register(['angular2/core', 'angular2/router', './recipe-service', './recipe-list.component', './recipe-detail.component'], function(exports_1, context_1) {
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
    var core_1, router_1, recipe_service_1, recipe_list_component_1, recipe_detail_component_1;
    var RecipesComponent;
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
            },
            function (recipe_list_component_1_1) {
                recipe_list_component_1 = recipe_list_component_1_1;
            },
            function (recipe_detail_component_1_1) {
                recipe_detail_component_1 = recipe_detail_component_1_1;
            }],
        execute: function() {
            RecipesComponent = (function () {
                function RecipesComponent() {
                }
                RecipesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-recipes',
                        template: "\n\t\t<h2>Recipes</h2>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<my-recipe-list></my-recipe-list>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-8\">\n\t\t\t\t<router-outlet></router-outlet>\n\t\t\t</div>\n\t\t</div>\n\t",
                        providers: [recipe_service_1.RecipeService],
                        directives: [recipe_list_component_1.RecipeListComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'RecipeDetail', component: recipe_detail_component_1.RecipeDetailComponent, useAsDefault: true },
                        { path: '/:editMode', name: 'RecipeEdit', component: recipe_detail_component_1.RecipeDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], RecipesComponent);
                return RecipesComponent;
            }());
            exports_1("RecipesComponent", RecipesComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMEJBO2dCQUFBO2dCQUVBLENBQUM7Z0JBdEJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSxpUEFVVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO3dCQUMxQixVQUFVLEVBQUUsQ0FBQywyQ0FBbUIsRUFBRSwwQkFBaUIsQ0FBQztxQkFDcEQsQ0FBQztvQkFDRCxvQkFBVyxDQUFDO3dCQUNaLEVBQUMsSUFBSSxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSwrQ0FBcUIsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDO3dCQUNyRixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsK0NBQXFCLEVBQUM7cUJBQzFFLENBQUM7O29DQUFBO2dCQUdGLHVCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCwrQ0FFQyxDQUFBIiwiZmlsZSI6InJlY2lwZS1ib29rL3JlY2lwZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtSZWNpcGVTZXJ2aWNlfSBmcm9tICcuL3JlY2lwZS1zZXJ2aWNlJztcclxuaW1wb3J0IHtSZWNpcGVMaXN0Q29tcG9uZW50fSBmcm9tICcuL3JlY2lwZS1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UmVjaXBlRGV0YWlsQ29tcG9uZW50fSBmcm9tICcuL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnbXktcmVjaXBlcycsXHJcblx0dGVtcGxhdGU6IGBcclxuXHRcdDxoMj5SZWNpcGVzPC9oMj5cclxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XHJcblx0XHRcdFx0PG15LXJlY2lwZS1saXN0PjwvbXktcmVjaXBlLWxpc3Q+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLThcIj5cclxuXHRcdFx0XHQ8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YCxcclxuXHRwcm92aWRlcnM6IFtSZWNpcGVTZXJ2aWNlXSxcclxuXHRkaXJlY3RpdmVzOiBbUmVjaXBlTGlzdENvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcbkBSb3V0ZUNvbmZpZyhbXHJcblx0e3BhdGg6Jy8nLCBuYW1lOiAnUmVjaXBlRGV0YWlsJywgY29tcG9uZW50OiBSZWNpcGVEZXRhaWxDb21wb25lbnQgdXNlQXNEZWZhdWx0OiB0cnVlfSxcclxuXHR7cGF0aDogJy86ZWRpdE1vZGUnLCBuYW1lOiAnUmVjaXBlRWRpdCcsIGNvbXBvbmVudDogUmVjaXBlRGV0YWlsQ29tcG9uZW50fVxyXG5dKVxyXG5leHBvcnQgY2xhc3MgUmVjaXBlc0NvbXBvbmVudCB7XHJcblx0XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
