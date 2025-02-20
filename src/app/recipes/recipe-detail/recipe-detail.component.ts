import { Component, Input } from '@angular/core';
import { IRecipe } from '../i-recipe';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-recipe-detail',
	imports: [RouterLink],
	templateUrl: './recipe-detail.component.html',
	styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
	@Input('id') recipeID?: string;

	//public ingredients: Ingredient[] = [];
}
