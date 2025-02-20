import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { CreateRecipeComponent } from './recipes/create-recipe/create-recipe.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'main', component: MainComponent },
	{ path: 'recipes/:id', component: RecipeDetailComponent },
	{ path: 'create_recipe', component: CreateRecipeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' },
];
