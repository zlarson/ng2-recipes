System.register(['angular2/core', '../shared/shopping-list.service'], function(exports_1, context_1) {
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
    var core_1, shopping_list_service_1;
    var ShoppingListEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListEditComponent = (function () {
                function ShoppingListEditComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                }
                ShoppingListEditComponent.prototype.onSubmit = function (item) {
                    //update or add depending on this.ingredient existing
                    this.ingredient !== null ?
                        this._shoppingListService.updateItem(this._shoppingListService.getIndexOfItem(this.ingredient), item) :
                        this._shoppingListService.insertItem(item);
                };
                ShoppingListEditComponent.prototype.onDelete = function () {
                    this._shoppingListService.deleteItem(this.ingredient);
                    this.ingredient = null;
                };
                ShoppingListEditComponent = __decorate([
                    core_1.Component({
                        selector: 'my-shopping-list-edit',
                        template: "\n\t\t<h4>{{ingredient === null ? 'Add' : 'Edit'}} Item</h4>\n\t\t<form id=\"shopping-list-add\" (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n\t\t\t<label for=\"item-name\">Name</label>\n\t\t\t<input type=\"text\" id=\"item-name\" required [ngModel]=\"ingredient?.name\" ngControl=\"name\">\n\t\t\t<label for=\"item-amount\">Amount</label>\n\t\t\t<input type=\"text\" id=\"item-amount\" required [ngModel]=\"ingredient?.amount\" ngControl=\"amount\">\n\t\t\t<button class=\"btn btn-primary\" type=\"submit\">{{ingredient === null ? 'Create' : 'Update'}}</button>\n\t\t\t<button class=\"btn btn-danger\" *ngIf=\"ingredient !== null\" (click)=\"onDelete()\">Remove Item</button>\n\t\t</form>\n\t",
                        inputs: ['ingredient']
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListEditComponent);
                return ShoppingListEditComponent;
            }());
            exports_1("ShoppingListEditComponent", ShoppingListEditComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1lZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CQTtnQkFHQyxtQ0FBb0Isb0JBQXlDO29CQUF6Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO2dCQUFFLENBQUM7Z0JBRWhFLDRDQUFRLEdBQVIsVUFBUyxJQUFnQjtvQkFDeEIscURBQXFEO29CQUNyRCxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUk7d0JBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDO3dCQUNyRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QyxDQUFDO2dCQUVELDRDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3RELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixDQUFDO2dCQTlCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSx1QkFBdUI7d0JBQ2pDLFFBQVEsRUFBRSwyckJBVVQ7d0JBQ0QsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDO3FCQUN0QixDQUFDOzs2Q0FBQTtnQkFpQkYsZ0NBQUM7WUFBRCxDQWhCQSxBQWdCQyxJQUFBO1lBaEJELGlFQWdCQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtJbmdyZWRpZW50fSBmcm9tICcuLi9zaGFyZWQvaW5ncmVkaWVudCc7XHJcbmltcG9ydCB7U2hvcHBpbmdMaXN0U2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL3Nob3BwaW5nLWxpc3Quc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ215LXNob3BwaW5nLWxpc3QtZWRpdCcsXHJcblx0dGVtcGxhdGU6IGBcclxuXHRcdDxoND57e2luZ3JlZGllbnQgPT09IG51bGwgPyAnQWRkJyA6ICdFZGl0J319IEl0ZW08L2g0PlxyXG5cdFx0PGZvcm0gaWQ9XCJzaG9wcGluZy1saXN0LWFkZFwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChmLnZhbHVlKVwiICNmPVwibmdGb3JtXCI+XHJcblx0XHRcdDxsYWJlbCBmb3I9XCJpdGVtLW5hbWVcIj5OYW1lPC9sYWJlbD5cclxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLW5hbWVcIiByZXF1aXJlZCBbbmdNb2RlbF09XCJpbmdyZWRpZW50Py5uYW1lXCIgbmdDb250cm9sPVwibmFtZVwiPlxyXG5cdFx0XHQ8bGFiZWwgZm9yPVwiaXRlbS1hbW91bnRcIj5BbW91bnQ8L2xhYmVsPlxyXG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tYW1vdW50XCIgcmVxdWlyZWQgW25nTW9kZWxdPVwiaW5ncmVkaWVudD8uYW1vdW50XCIgbmdDb250cm9sPVwiYW1vdW50XCI+XHJcblx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+e3tpbmdyZWRpZW50ID09PSBudWxsID8gJ0NyZWF0ZScgOiAnVXBkYXRlJ319PC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiICpuZ0lmPVwiaW5ncmVkaWVudCAhPT0gbnVsbFwiIChjbGljayk9XCJvbkRlbGV0ZSgpXCI+UmVtb3ZlIEl0ZW08L2J1dHRvbj5cclxuXHRcdDwvZm9ybT5cclxuXHRgLFxyXG5cdGlucHV0czogWydpbmdyZWRpZW50J11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdEVkaXRDb21wb25lbnQge1xyXG5cdGluZ3JlZGllbnQ6IEluZ3JlZGllbnQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nob3BwaW5nTGlzdFNlcnZpY2U6IFNob3BwaW5nTGlzdFNlcnZpY2Upe31cclxuXHJcblx0b25TdWJtaXQoaXRlbTogSW5ncmVkaWVudCl7XHJcblx0XHQvL3VwZGF0ZSBvciBhZGQgZGVwZW5kaW5nIG9uIHRoaXMuaW5ncmVkaWVudCBleGlzdGluZ1xyXG5cdFx0dGhpcy5pbmdyZWRpZW50ICE9PSBudWxsID8gXHJcblx0XHRcdHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UudXBkYXRlSXRlbSh0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmdldEluZGV4T2ZJdGVtKHRoaXMuaW5ncmVkaWVudCksIGl0ZW0pIDpcclxuXHRcdFx0dGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5pbnNlcnRJdGVtKGl0ZW0pO1xyXG5cdH1cclxuXHJcblx0b25EZWxldGUoKXtcclxuXHRcdHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuZGVsZXRlSXRlbSh0aGlzLmluZ3JlZGllbnQpO1xyXG5cdFx0dGhpcy5pbmdyZWRpZW50ID0gbnVsbDtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
