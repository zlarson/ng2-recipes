import {Recipe} from '../shared/recipe';
import {Ingredient} from '../shared/ingredient';

export let RECIPES: Recipe[] = [
	new Recipe('Steak','steak is goooooood.','http://weeklygravy.com/wp-content/uploads/2014/01/steak.jpg',[
		new Ingredient('beef',1),
		new Ingredient('salt',20),
		new Ingredient('pepper',15),
		new Ingredient('fire',1)
	]),
	new Recipe('Biscuit','biscuits','http://www.farmflavor.com/wp-content/uploads/2012/09/biscuits-whitelily.jpg',[
		new Ingredient('flour',1),
		new Ingredient('salt',20),
		new Ingredient('butter',15)
	])
];