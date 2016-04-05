System.register(['../shared/recipe', '../shared/ingredient'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var recipe_1, ingredient_1;
    var RECIPES;
    return {
        setters:[
            function (recipe_1_1) {
                recipe_1 = recipe_1_1;
            },
            function (ingredient_1_1) {
                ingredient_1 = ingredient_1_1;
            }],
        execute: function() {
            exports_1("RECIPES", RECIPES = [
                new recipe_1.Recipe('Steak', 'steak is goooooood.', 'http://weeklygravy.com/wp-content/uploads/2014/01/steak.jpg', [
                    new ingredient_1.Ingredient('beef', 1),
                    new ingredient_1.Ingredient('salt', 20),
                    new ingredient_1.Ingredient('pepper', 15),
                    new ingredient_1.Ingredient('fire', 1)
                ]),
                new recipe_1.Recipe('Biscuit', 'biscuits', 'http://www.farmflavor.com/wp-content/uploads/2012/09/biscuits-whitelily.jpg', [
                    new ingredient_1.Ingredient('flour', 1),
                    new ingredient_1.Ingredient('salt', 20),
                    new ingredient_1.Ingredient('butter', 15)
                ])
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2svcmVjaXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBR1csT0FBTzs7Ozs7Ozs7OztZQUFQLHFCQUFBLE9BQU8sR0FBYTtnQkFDOUIsSUFBSSxlQUFNLENBQUMsT0FBTyxFQUFDLHFCQUFxQixFQUFDLDZEQUE2RCxFQUFDO29CQUN0RyxJQUFJLHVCQUFVLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztvQkFDeEIsSUFBSSx1QkFBVSxDQUFDLE1BQU0sRUFBQyxFQUFFLENBQUM7b0JBQ3pCLElBQUksdUJBQVUsQ0FBQyxRQUFRLEVBQUMsRUFBRSxDQUFDO29CQUMzQixJQUFJLHVCQUFVLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztpQkFDeEIsQ0FBQztnQkFDRixJQUFJLGVBQU0sQ0FBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLDZFQUE2RSxFQUFDO29CQUM3RyxJQUFJLHVCQUFVLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztvQkFDekIsSUFBSSx1QkFBVSxDQUFDLE1BQU0sRUFBQyxFQUFFLENBQUM7b0JBQ3pCLElBQUksdUJBQVUsQ0FBQyxRQUFRLEVBQUMsRUFBRSxDQUFDO2lCQUMzQixDQUFDO2FBQ0YsQ0FBQSxDQUFDIiwiZmlsZSI6Im1vY2svcmVjaXBlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVjaXBlfSBmcm9tICcuLi9zaGFyZWQvcmVjaXBlJztcclxuaW1wb3J0IHtJbmdyZWRpZW50fSBmcm9tICcuLi9zaGFyZWQvaW5ncmVkaWVudCc7XHJcblxyXG5leHBvcnQgbGV0IFJFQ0lQRVM6IFJlY2lwZVtdID0gW1xyXG5cdG5ldyBSZWNpcGUoJ1N0ZWFrJywnc3RlYWsgaXMgZ29vb29vb29kLicsJ2h0dHA6Ly93ZWVrbHlncmF2eS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTQvMDEvc3RlYWsuanBnJyxbXHJcblx0XHRuZXcgSW5ncmVkaWVudCgnYmVlZicsMSksXHJcblx0XHRuZXcgSW5ncmVkaWVudCgnc2FsdCcsMjApLFxyXG5cdFx0bmV3IEluZ3JlZGllbnQoJ3BlcHBlcicsMTUpLFxyXG5cdFx0bmV3IEluZ3JlZGllbnQoJ2ZpcmUnLDEpXHJcblx0XSksXHJcblx0bmV3IFJlY2lwZSgnQmlzY3VpdCcsJ2Jpc2N1aXRzJywnaHR0cDovL3d3dy5mYXJtZmxhdm9yLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxMi8wOS9iaXNjdWl0cy13aGl0ZWxpbHkuanBnJyxbXHJcblx0XHRuZXcgSW5ncmVkaWVudCgnZmxvdXInLDEpLFxyXG5cdFx0bmV3IEluZ3JlZGllbnQoJ3NhbHQnLDIwKSxcclxuXHRcdG5ldyBJbmdyZWRpZW50KCdidXR0ZXInLDE1KVxyXG5cdF0pXHJcbl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
