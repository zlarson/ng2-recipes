import {Component, OnInit} from 'angular2/core';
import {ControlGroup, ControlArray, Control, Validators, FormBuilder} from 'angular2/common';
import {Recipe} from '../shared/recipe';
import {RecipeService} from './recipe-service'
import {RouteParams,Router,CanDeactivate} from 'angular2/router';

@Component({
	templateUrl: 'templates/recipes/recipe-edit.tpl.html' 
})
export class RecipeEditComponent implements OnInit, CanDeactivate {
	recipe: Recipe;
	private _editMode = 'create';
	private _recipeIndex: number;
	private _submitted = false;
	myForm: ControlGroup;

	constructor(
		private _routeParams: RouteParams, 
		private _recipeService: RecipeService,
		private _formBuilder: FormBuilder,
		private _router: Router) {}

	onAddItem(itemName: string, itemAmount: string){
		(<ControlArray>this.myForm.controls['ingredients']).push(new ControlGroup({
						name: new Control(itemName, Validators.required),
						amount: new Control(itemAmount, Validators.compose([Validators.required, hasNumbers, greaterZero]))
					}));
	}

	onRemoveItem(index: number){
		(<ControlArray>this.myForm.controls['ingredients']).removeAt(index);	
	}

	onSubmit(){
		this.recipe = this.myForm.value;
		if(this._editMode === 'edit'){
			this._recipeService.updateRecipe(this._recipeIndex, this.recipe);
		}else{
			this._recipeService.insertRecipe(this.recipe);
		}

		this._submitted = true;
		this.navigateBack();
	}

	onCancel(){
		this.navigateBack();	
	}

	private navigateBack(){
		this._router.navigate(['RecipeDetail', {recipeIndex: this._recipeIndex}]);
	}

	routerCanDeactivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction) : any{
		if(this._submitted || this.myForm.pristine) return true;

		return confirm("You have unsaved changes.  Are you sure?");
	}
	
	ngOnInit(): any{
		this._editMode = this._routeParams.get('editMode');	
		let fbRecipeName = '';
		let fbRecipeImageUrl = '';
		let fbRecipeContent = '';
		let fbIngredients: ControlArray = new ControlArray([]);

		if(this._editMode === 'edit'){
			this._recipeIndex = +this._routeParams.get('itemIndex');
			this.recipe = this._recipeService.getRecipe(this._recipeIndex);
			for(let i = 0; i < this.recipe.ingredients.length; i++){
				fbIngredients.push(
					new ControlGroup({
						name: new Control(this.recipe.ingredients[i].name, Validators.required),
						amount: new Control(this.recipe.ingredients[i].amount, Validators.compose([Validators.required, hasNumbers, greaterZero]))
					})
				));
			}

			fbRecipeName = this.recipe.name;
			fbRecipeImageUrl = this.recipe.imageUrl;
			fbRecipeContent = this.recipe.content;
		}

		this.myForm = this._formBuilder.group({
			name: [fbRecipeName, Validators.required],
			imageUrl: [fbRecipeImageUrl],
			content: [fbRecipeContent],
			ingredients: this._formBuilder.array(fbIngredients.controls)
		});
	}
}

function hasNumbers(control: Control): {[s: string]: boolean}{
	if(!('' + control.value).match('\\d+')){
		return { noNumbers: true};
	}
}

function greaterZero(control: Control): {[s: string]: boolean}{
	if(!(+control.value > 0)){
		return { tooSmall: true};
	}
}