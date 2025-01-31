import { Component } from '@angular/core';
import { RecipesListComponent } from '../../recipes/recipes-list/recipes-list.component';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-home',
	imports: [RouterLink],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
})
export class HomeComponent {}
