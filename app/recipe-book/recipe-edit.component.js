System.register(['angular2/core', 'angular2/common', './recipe-service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, common_1, recipe_service_1, router_1;
    var RecipeEditComponent;
    function hasNumbers(control) {
        if (!('' + control.value).match('\\d+')) {
            return { noNumbers: true };
        }
    }
    function greaterZero(control) {
        if (!(+control.value > 0)) {
            return { tooSmall: true };
        }
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (recipe_service_1_1) {
                recipe_service_1 = recipe_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            RecipeEditComponent = (function () {
                function RecipeEditComponent(_routeParams, _recipeService, _formBuilder, _router) {
                    this._routeParams = _routeParams;
                    this._recipeService = _recipeService;
                    this._formBuilder = _formBuilder;
                    this._router = _router;
                    this._editMode = 'create';
                    this._submitted = false;
                }
                RecipeEditComponent.prototype.onAddItem = function (itemName, itemAmount) {
                    this.myForm.controls['ingredients'].push(new common_1.ControlGroup({
                        name: new common_1.Control(itemName, common_1.Validators.required),
                        amount: new common_1.Control(itemAmount, common_1.Validators.compose([common_1.Validators.required, hasNumbers, greaterZero]))
                    }));
                };
                RecipeEditComponent.prototype.onRemoveItem = function (index) {
                    this.myForm.controls['ingredients'].removeAt(index);
                };
                RecipeEditComponent.prototype.onSubmit = function () {
                    this.recipe = this.myForm.value;
                    if (this._editMode === 'edit') {
                        this._recipeService.updateRecipe(this._recipeIndex, this.recipe);
                    }
                    else {
                        this._recipeService.insertRecipe(this.recipe);
                    }
                    this._submitted = true;
                    this.navigateBack();
                };
                RecipeEditComponent.prototype.onCancel = function () {
                    this.navigateBack();
                };
                RecipeEditComponent.prototype.navigateBack = function () {
                    this._router.navigate(['RecipeDetail', { recipeIndex: this._recipeIndex }]);
                };
                RecipeEditComponent.prototype.routerCanDeactivate = function (nextInstruction, prevInstruction) {
                    if (this._submitted || this.myForm.pristine)
                        return true;
                    return confirm("You have unsaved changes.  Are you sure?");
                };
                RecipeEditComponent.prototype.ngOnInit = function () {
                    this._editMode = this._routeParams.get('editMode');
                    var fbRecipeName = '';
                    var fbRecipeImageUrl = '';
                    var fbRecipeContent = '';
                    var fbIngredients = new common_1.ControlArray([]);
                    if (this._editMode === 'edit') {
                        this._recipeIndex = +this._routeParams.get('itemIndex');
                        this.recipe = this._recipeService.getRecipe(this._recipeIndex);
                        for (var i = 0; i < this.recipe.ingredients.length; i++) {
                            fbIngredients.push(new common_1.ControlGroup({
                                name: new common_1.Control(this.recipe.ingredients[i].name, common_1.Validators.required),
                                amount: new common_1.Control(this.recipe.ingredients[i].amount, common_1.Validators.compose([common_1.Validators.required, hasNumbers, greaterZero]))
                            }));
                            ;
                        }
                        fbRecipeName = this.recipe.name;
                        fbRecipeImageUrl = this.recipe.imageUrl;
                        fbRecipeContent = this.recipe.content;
                    }
                    this.myForm = this._formBuilder.group({
                        name: [fbRecipeName, common_1.Validators.required],
                        imageUrl: [fbRecipeImageUrl],
                        content: [fbRecipeContent],
                        ingredients: this._formBuilder.array(fbIngredients.controls)
                    });
                };
                RecipeEditComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'templates/recipes/recipe-edit.tpl.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, recipe_service_1.RecipeService, common_1.FormBuilder, router_1.Router])
                ], RecipeEditComponent);
                return RecipeEditComponent;
            }());
            exports_1("RecipeEditComponent", RecipeEditComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1lZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQTRGQSxvQkFBb0IsT0FBZ0I7UUFDbkMsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUN2QyxNQUFNLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDM0IsQ0FBQztJQUNGLENBQUM7SUFFRCxxQkFBcUIsT0FBZ0I7UUFDcEMsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDekIsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQzFCLENBQUM7SUFDRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O1lBN0ZEO2dCQU9DLDZCQUNTLFlBQXlCLEVBQ3pCLGNBQTZCLEVBQzdCLFlBQXlCLEVBQ3pCLE9BQWU7b0JBSGYsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUM3QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDekIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFUaEIsY0FBUyxHQUFHLFFBQVEsQ0FBQztvQkFFckIsZUFBVSxHQUFHLEtBQUssQ0FBQztnQkFPQSxDQUFDO2dCQUU1Qix1Q0FBUyxHQUFULFVBQVUsUUFBZ0IsRUFBRSxVQUFrQjtvQkFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFFLENBQUMsSUFBSSxDQUFDLElBQUkscUJBQVksQ0FBQzt3QkFDdEUsSUFBSSxFQUFFLElBQUksZ0JBQU8sQ0FBQyxRQUFRLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ2hELE1BQU0sRUFB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TyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLG1CQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDOzZCQUMxSCxDQUFDLENBQ0YsQ0FBQTs0QkFBQyxDQUFDO3dCQUNKLENBQUM7d0JBRUQsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUNoQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzt3QkFDeEMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO29CQUN2QyxDQUFDO29CQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7d0JBQ3JDLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDekMsUUFBUSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7d0JBQzVCLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQzt3QkFDMUIsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7cUJBQzVELENBQUMsQ0FBQztnQkFDSixDQUFDO2dCQW5GRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFdBQVcsRUFBRSx3Q0FBd0M7cUJBQ3JELENBQUM7O3VDQUFBO2dCQWtGRiwwQkFBQztZQUFELENBakZBLEFBaUZDLElBQUE7WUFqRkQscURBaUZDLENBQUEiLCJmaWxlIjoicmVjaXBlLWJvb2svcmVjaXBlLWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbEdyb3VwLCBDb250cm9sQXJyYXksIENvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5pbXBvcnQge1JlY2lwZX0gZnJvbSAnLi4vc2hhcmVkL3JlY2lwZSc7XHJcbmltcG9ydCB7UmVjaXBlU2VydmljZX0gZnJvbSAnLi9yZWNpcGUtc2VydmljZSdcclxuaW1wb3J0IHtSb3V0ZVBhcmFtcyxSb3V0ZXIsQ2FuRGVhY3RpdmF0ZX0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3JlY2lwZXMvcmVjaXBlLWVkaXQudHBsLmh0bWwnIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVjaXBlRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ2FuRGVhY3RpdmF0ZSB7XHJcblx0cmVjaXBlOiBSZWNpcGU7XHJcblx0cHJpdmF0ZSBfZWRpdE1vZGUgPSAnY3JlYXRlJztcclxuXHRwcml2YXRlIF9yZWNpcGVJbmRleDogbnVtYmVyO1xyXG5cdHByaXZhdGUgX3N1Ym1pdHRlZCA9IGZhbHNlO1xyXG5cdG15Rm9ybTogQ29udHJvbEdyb3VwO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcywgXHJcblx0XHRwcml2YXRlIF9yZWNpcGVTZXJ2aWNlOiBSZWNpcGVTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG5cdFx0cHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHt9XHJcblxyXG5cdG9uQWRkSXRlbShpdGVtTmFtZTogc3RyaW5nLCBpdGVtQW1vdW50OiBzdHJpbmcpe1xyXG5cdFx0KDxDb250cm9sQXJyYXk+dGhpcy5teUZvcm0uY29udHJvbHNbJ2luZ3JlZGllbnRzJ10pLnB1c2gobmV3IENvbnRyb2xHcm91cCh7XHJcblx0XHRcdFx0XHRcdG5hbWU6IG5ldyBDb250cm9sKGl0ZW1OYW1lLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuXHRcdFx0XHRcdFx0YW1vdW50OiBuZXcgQ29udHJvbChpdGVtQW1vdW50LCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIGhhc051bWJlcnMsIGdyZWF0ZXJaZXJvXSkpXHJcblx0XHRcdFx0XHR9KSk7XHJcblx0fVxyXG5cclxuXHRvblJlbW92ZUl0ZW0oaW5kZXg6IG51bWJlcil7XHJcblx0XHQoPENvbnRyb2xBcnJheT50aGlzLm15Rm9ybS5jb250cm9sc1snaW5ncmVkaWVudHMnXSkucmVtb3ZlQXQoaW5kZXgpO1x0XHJcblx0fVxyXG5cclxuXHRvblN1Ym1pdCgpe1xyXG5cdFx0dGhpcy5yZWNpcGUgPSB0aGlzLm15Rm9ybS52YWx1ZTtcclxuXHRcdGlmKHRoaXMuX2VkaXRNb2RlID09PSAnZWRpdCcpe1xyXG5cdFx0XHR0aGlzLl9yZWNpcGVTZXJ2aWNlLnVwZGF0ZVJlY2lwZSh0aGlzLl9yZWNpcGVJbmRleCwgdGhpcy5yZWNpcGUpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuX3JlY2lwZVNlcnZpY2UuaW5zZXJ0UmVjaXBlKHRoaXMucmVjaXBlKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9zdWJtaXR0ZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5uYXZpZ2F0ZUJhY2soKTtcclxuXHR9XHJcblxyXG5cdG9uQ2FuY2VsKCl7XHJcblx0XHR0aGlzLm5hdmlnYXRlQmFjaygpO1x0XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG5hdmlnYXRlQmFjaygpe1xyXG5cdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnUmVjaXBlRGV0YWlsJywge3JlY2lwZUluZGV4OiB0aGlzLl9yZWNpcGVJbmRleH1dKTtcclxuXHR9XHJcblxyXG5cdHJvdXRlckNhbkRlYWN0aXZhdGUobmV4dEluc3RydWN0aW9uOiBDb21wb25lbnRJbnN0cnVjdGlvbiwgcHJldkluc3RydWN0aW9uOiBDb21wb25lbnRJbnN0cnVjdGlvbikgOiBhbnl7XHJcblx0XHRpZih0aGlzLl9zdWJtaXR0ZWQgfHwgdGhpcy5teUZvcm0ucHJpc3RpbmUpIHJldHVybiB0cnVlO1xyXG5cclxuXHRcdHJldHVybiBjb25maXJtKFwiWW91IGhhdmUgdW5zYXZlZCBjaGFuZ2VzLiAgQXJlIHlvdSBzdXJlP1wiKTtcclxuXHR9XHJcblx0XHJcblx0bmdPbkluaXQoKTogYW55e1xyXG5cdFx0dGhpcy5fZWRpdE1vZGUgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2VkaXRNb2RlJyk7XHRcclxuXHRcdGxldCBmYlJlY2lwZU5hbWUgPSAnJztcclxuXHRcdGxldCBmYlJlY2lwZUltYWdlVXJsID0gJyc7XHJcblx0XHRsZXQgZmJSZWNpcGVDb250ZW50ID0gJyc7XHJcblx0XHRsZXQgZmJJbmdyZWRpZW50czogQ29udHJvbEFycmF5ID0gbmV3IENvbnRyb2xBcnJheShbXSk7XHJcblxyXG5cdFx0aWYodGhpcy5fZWRpdE1vZGUgPT09ICdlZGl0Jyl7XHJcblx0XHRcdHRoaXMuX3JlY2lwZUluZGV4ID0gK3RoaXMuX3JvdXRlUGFyYW1zLmdldCgnaXRlbUluZGV4Jyk7XHJcblx0XHRcdHRoaXMucmVjaXBlID0gdGhpcy5fcmVjaXBlU2VydmljZS5nZXRSZWNpcGUodGhpcy5fcmVjaXBlSW5kZXgpO1xyXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5yZWNpcGUuaW5ncmVkaWVudHMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdGZiSW5ncmVkaWVudHMucHVzaChcclxuXHRcdFx0XHRcdG5ldyBDb250cm9sR3JvdXAoe1xyXG5cdFx0XHRcdFx0XHRuYW1lOiBuZXcgQ29udHJvbCh0aGlzLnJlY2lwZS5pbmdyZWRpZW50c1tpXS5uYW1lLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuXHRcdFx0XHRcdFx0YW1vdW50OiBuZXcgQ29udHJvbCh0aGlzLnJlY2lwZS5pbmdyZWRpZW50c1tpXS5hbW91bnQsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgaGFzTnVtYmVycywgZ3JlYXRlclplcm9dKSlcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0KSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZiUmVjaXBlTmFtZSA9IHRoaXMucmVjaXBlLm5hbWU7XHJcblx0XHRcdGZiUmVjaXBlSW1hZ2VVcmwgPSB0aGlzLnJlY2lwZS5pbWFnZVVybDtcclxuXHRcdFx0ZmJSZWNpcGVDb250ZW50ID0gdGhpcy5yZWNpcGUuY29udGVudDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm15Rm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcclxuXHRcdFx0bmFtZTogW2ZiUmVjaXBlTmFtZSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcblx0XHRcdGltYWdlVXJsOiBbZmJSZWNpcGVJbWFnZVVybF0sXHJcblx0XHRcdGNvbnRlbnQ6IFtmYlJlY2lwZUNvbnRlbnRdLFxyXG5cdFx0XHRpbmdyZWRpZW50czogdGhpcy5fZm9ybUJ1aWxkZXIuYXJyYXkoZmJJbmdyZWRpZW50cy5jb250cm9scylcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFzTnVtYmVycyhjb250cm9sOiBDb250cm9sKToge1tzOiBzdHJpbmddOiBib29sZWFufXtcclxuXHRpZighKCcnICsgY29udHJvbC52YWx1ZSkubWF0Y2goJ1xcXFxkKycpKXtcclxuXHRcdHJldHVybiB7IG5vTnVtYmVyczogdHJ1ZX07XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBncmVhdGVyWmVybyhjb250cm9sOiBDb250cm9sKToge1tzOiBzdHJpbmddOiBib29sZWFufXtcclxuXHRpZighKCtjb250cm9sLnZhbHVlID4gMCkpe1xyXG5cdFx0cmV0dXJuIHsgdG9vU21hbGw6IHRydWV9O1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
