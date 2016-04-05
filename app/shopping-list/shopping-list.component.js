System.register(['angular2/core', './shopping-list-edit.component', '../shared/shopping-list.service'], function(exports_1, context_1) {
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
    var core_1, shopping_list_edit_component_1, shopping_list_service_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_edit_component_1_1) {
                shopping_list_edit_component_1 = shopping_list_edit_component_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                    this.selectedItem = null;
                }
                ShoppingListComponent.prototype.onAddItem = function () {
                    this.selectedItem = null;
                };
                ShoppingListComponent.prototype.ngOnInit = function () {
                    this.shoppingList = this._shoppingListService.getAllItems();
                };
                ShoppingListComponent.prototype.onSelect = function (item) {
                    this.selectedItem = item;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        template: "\n\t\t<h2>Shopping List</h2>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-3\">\n\t\t\t\t<h4>Shopping List Items</h4>\n\t\t\t\t<button class=\"btn\" (click)=\"onAddItem()\">Add New Item</button>\n\t\t\t\t<ul>\n\t\t\t\t\t<li *ngFor=\"#item of shoppingList\" (click)=\"onSelect(item)\">\n\t\t\t\t\t\t{{item.name}} ({{item.amount}})\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-9\">\n\t\t\t\t<my-shopping-list-edit [ingredient]=\"selectedItem\"></my-shopping-list-edit>\n\t\t\t</div>\n\t\t</div>\t\t\n\t",
                        directives: [shopping_list_edit_component_1.ShoppingListEditComponent],
                        providers: [shopping_list_service_1.ShoppingListService]
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBSUMsK0JBQW9CLG9CQUF5QztvQkFBekMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtvQkFGN0QsaUJBQVksR0FBZSxJQUFJLENBQUM7Z0JBRWdDLENBQUM7Z0JBRWpFLHlDQUFTLEdBQVQ7b0JBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsd0NBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDN0QsQ0FBQztnQkFFRCx3Q0FBUSxHQUFSLFVBQVMsSUFBZ0I7b0JBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixDQUFDO2dCQXJDRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSx3aEJBZ0JUO3dCQUNELFVBQVUsRUFBRSxDQUFDLHdEQUF5QixDQUFDO3dCQUN2QyxTQUFTLEVBQUUsQ0FBQywyQ0FBbUIsQ0FBQztxQkFDaEMsQ0FBQzs7eUNBQUE7Z0JBa0JGLDRCQUFDO1lBQUQsQ0FqQkEsQUFpQkMsSUFBQTtZQWpCRCx5REFpQkMsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7U2hvcHBpbmdMaXN0RWRpdENvbXBvbmVudH0gZnJvbSAnLi9zaG9wcGluZy1saXN0LWVkaXQuY29tcG9uZW50JztcclxuaW1wb3J0IHtJbmdyZWRpZW50fSBmcm9tICcuLi9zaGFyZWQvaW5ncmVkaWVudCc7XHJcbmltcG9ydCB7U2hvcHBpbmdMaXN0U2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL3Nob3BwaW5nLWxpc3Quc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdFx0PGgyPlNob3BwaW5nIExpc3Q8L2gyPlxyXG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cclxuXHRcdFx0XHQ8aDQ+U2hvcHBpbmcgTGlzdCBJdGVtczwvaDQ+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0blwiIChjbGljayk9XCJvbkFkZEl0ZW0oKVwiPkFkZCBOZXcgSXRlbTwvYnV0dG9uPlxyXG5cdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdDxsaSAqbmdGb3I9XCIjaXRlbSBvZiBzaG9wcGluZ0xpc3RcIiAoY2xpY2spPVwib25TZWxlY3QoaXRlbSlcIj5cclxuXHRcdFx0XHRcdFx0e3tpdGVtLm5hbWV9fSAoe3tpdGVtLmFtb3VudH19KVxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC05XCI+XHJcblx0XHRcdFx0PG15LXNob3BwaW5nLWxpc3QtZWRpdCBbaW5ncmVkaWVudF09XCJzZWxlY3RlZEl0ZW1cIj48L215LXNob3BwaW5nLWxpc3QtZWRpdD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cdFx0XHJcblx0YCxcclxuXHRkaXJlY3RpdmVzOiBbU2hvcHBpbmdMaXN0RWRpdENvbXBvbmVudF0sXHJcblx0cHJvdmlkZXJzOiBbU2hvcHBpbmdMaXN0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0c2hvcHBpbmdMaXN0OiBJbmdyZWRpZW50W107XHJcblx0c2VsZWN0ZWRJdGVtOiBJbmdyZWRpZW50ID0gbnVsbDtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfc2hvcHBpbmdMaXN0U2VydmljZTogU2hvcHBpbmdMaXN0U2VydmljZSl7IH1cclxuXHJcblx0b25BZGRJdGVtKCkge1xyXG5cdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSBudWxsO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKTogYW55IHtcclxuXHRcdHRoaXMuc2hvcHBpbmdMaXN0ID0gdGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5nZXRBbGxJdGVtcygpO1xyXG5cdH1cclxuXHJcblx0b25TZWxlY3QoaXRlbTogSW5ncmVkaWVudCkge1xyXG5cdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
