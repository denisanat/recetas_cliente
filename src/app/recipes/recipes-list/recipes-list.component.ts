import { Component, OnInit } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { IRecipe } from '../i-recipe';
import { SupabaseService } from '../../service/supabase.service';

@Component({
	selector: 'app-recipes-list',
	imports: [RecipeCardComponent],
	templateUrl: './recipes-list.component.html',
	styleUrl: './recipes-list.component.css',
})
export class RecipesListComponent implements OnInit {
	public recipes: IRecipe[] = [];

	constructor(private supabase: SupabaseService) {}

	ngOnInit(): void {
		this.supabase.getMeals().subscribe({
			next: (meals) => {
				this.recipes = meals;
				console.log(meals);
			},
			error: (error) => console.log(error),
			complete: () => console.log('Recibido'),
		});
	}
}
