import { Component, Input } from '@angular/core';
import { SupabaseService } from '../../service/supabase.service';
import { FormsModule } from '@angular/forms';
import { IRecipe } from '../i-recipe';

@Component({
    selector: 'app-create-recipe',
    imports: [FormsModule],
    templateUrl: './create-recipe.component.html',
    styleUrl: './create-recipe.component.css',
})
export class CreateRecipeComponent {
    receta: IRecipe = this.inicializarReceta();

    constructor(
        private supaService: SupabaseService,
    ) {}

    crearReceta() {
        this.supaService.crearReceta(this.receta)
			.then(() => {
				alert('Receta creada con éxito');
				this.receta = this.inicializarReceta(); // Limpiamos el formulario
        	})
        	.catch((error) => {
				console.error('Error al crear la receta:', error);
				alert('Hubo un error al crear la receta');
        	});
    }
      








    inicializarReceta(): IRecipe {
        return {
          idmeal: null,
          strMeal: null,
          strDrinkAlternate: null,
          strCategory: null,
          strArea: null,
          strInstructions: null,
          strMealThumb: null,
          strTags: null,
          strYoutube: null,
          strIngredient1: null,
          strIngredient2: null,
          strIngredient3: null,
          strIngredient4: null,
          strIngredient5: null,
          strIngredient6: null,
          strIngredient7: null,
          strIngredient8: null,
          strIngredient9: null,
          strIngredient10: null,
          strIngredient11: null,
          strIngredient12: null,
          strIngredient13: null,
          strIngredient14: null,
          strIngredient15: null,
          strIngredient16: null,
          strIngredient17: null,
          strIngredient18: null,
          strIngredient19: null,
          strIngredient20: null,
          strMeasure1: null,
          strMeasure2: null,
          strMeasure3: null,
          strMeasure4: null,
          strMeasure5: null,
          strMeasure6: null,
          strMeasure7: null,
          strMeasure8: null,
          strMeasure9: null,
          strMeasure10: null,
          strMeasure11: null,
          strMeasure12: null,
          strMeasure13: null,
          strMeasure14: null,
          strMeasure15: null,
          strMeasure16: null,
          strMeasure17: null,
          strMeasure18: null,
          strMeasure19: null,
          strMeasure20: null,
          strImageSource: null,
        };
      }
}


  
