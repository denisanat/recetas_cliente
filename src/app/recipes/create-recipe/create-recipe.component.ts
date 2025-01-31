import { Component, Input } from '@angular/core';
import { SupabaseService } from '../../service/supabase.service';
import {
	FormBuilder,
	FormGroup,
	Validators,
	FormArray,
	FormControl,
} from '@angular/forms';

@Component({
	selector: 'app-create-recipe',
	imports: [],
	templateUrl: './create-recipe.component.html',
	styleUrl: './create-recipe.component.css',
})
export class CreateRecipeComponent {
	@Input('id') recipeId?: string;
	mealForm: FormGroup;

	constructor(
		private supaService: SupabaseService,
		private formBuilder: FormBuilder
	) {
		this.mealForm = this.formBuilder.group({
			strMeal: ['', [Validators.required]],
			strInstructions: ['', [Validators.required]],
			ingredients: this.formBuilder.array([]),
		});
	}

	get strMealValid() {
		return (
			this.mealForm.get('strMeal')?.valid &&
			this.mealForm.get('strMeal')?.touched
		);
	}
}
