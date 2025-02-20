import { Component, OnInit } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { IRecipe } from '../i-recipe';
import { SupabaseService } from '../../service/supabase.service';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-recipes-list',
	imports: [RecipeCardComponent, FormsModule],
	templateUrl: './recipes-list.component.html',
	styleUrl: './recipes-list.component.css',
})
export class RecipesListComponent implements OnInit {
	public recipes: IRecipe[] = [];
	public filteredRecipes: IRecipe[] | any = [];
	public searchTerm: string = '';

	constructor(private supabase: SupabaseService) {}

	ngOnInit(): void {
		this.supabase.getMeals().subscribe({
			next: (meals) => {
				this.recipes = meals;
				this.filteredRecipes = meals;
			},
			error: (error) => console.log(error),
		});
	}

	onSearchChange(): void {
		this.supabase.getMealsSearch(this.searchTerm).subscribe({
			next: (meals) => {
				this.filteredRecipes = meals;
			},
			error: (error) => console.log(error),
		});
	}
}
