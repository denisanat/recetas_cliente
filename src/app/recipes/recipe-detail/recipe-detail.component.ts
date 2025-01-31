import { Component, Input } from '@angular/core';
import { IRecipe } from '../i-recipe';
import { RouterLink } from '@angular/router';
import { recipes } from '../recipes-list/recipes_exemples';

@Component({
	selector: 'app-recipe-detail',
	imports: [RouterLink],
	templateUrl: './recipe-detail.component.html',
	styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
	@Input('id') recipeID?: string;

	public recipe: IRecipe = recipes[0];
	//public ingredients: Ingredient[] = [];
}
