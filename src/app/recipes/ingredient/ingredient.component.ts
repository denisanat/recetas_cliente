import { Component, Input } from '@angular/core';
import { IIngredient } from '../i-ingredient';
import { SlicePipe } from '@angular/common';

@Component({
	selector: 'app-ingredient',
	imports: [SlicePipe],
	templateUrl: './ingredient.component.html',
	styleUrl: './ingredient.component.css',
})
export class IngredientComponent {
	@Input('ingredient') ingredient?: IIngredient;
}
