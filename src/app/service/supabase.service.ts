import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { Observable, from, map } from 'rxjs';
import { IRecipe } from '../recipes/i-recipe';

@Injectable({
	providedIn: 'root',
})
export class SupabaseService {
	private supabase: SupabaseClient;

	constructor() {
		this.supabase = createClient(
			environment.supabaseUrl,
			environment.supabaseKey
		);
	}

	// Pedir todos los datos de una tabla a la bd
	async getData(tabla: string): Promise<any[]> {
		const { data, error } = await this.supabase.from(tabla).select('*');

		if (error) {
			console.error('No se han podido conseguir los datos. ', error);
			throw error;
		}
		return data;
	}

	// Adaptador de las promesas a Observables
	getDataObservable(table: string): Observable<any[]> {
		return from(this.getData(table));
	}

	// Pedir los platos directamente
	getMeals(): Observable<IRecipe[]> {
		return this.getDataObservable('meals');
	}

	getMealsSearch(searchTerm: string = '') {
		return from(
			this.supabase
				.from('meals')
				.select('*')
				.ilike('strMeal', `%${searchTerm}%`)
		).pipe(
			map(response => response.data)
		);
	}

	// crear una receta nueva
	async crearReceta(receta: IRecipe) {
		const { idmeal, ...resto } = receta;
  		const recetaConIdMinusc = {...resto, idmeal: idmeal};

  		const { data, error } = await this.supabase.from('meals').insert([recetaConIdMinusc]);

		if (error) throw error;
		return data;
	}

	// función para loguearse
	async login(email: string, password: string) {
		const { data, error } = await this.supabase.auth.signInWithPassword({
		  email,
		  password,
		});
	
		if (error) throw error;
		return data;
	  }

	  // funcion para registrarse
	  async register(email: string, password: string) {
		const { data, error } = await this.supabase.auth.signUp({
		  email,
		  password,
		});
	
		if (error) throw error;
		return data;
	  }

	  async logout() {
		await this.supabase.auth.signOut();
	  }
	
	  getUser() {
		return this.supabase.auth.getUser();
	  }

	  // Verificar si hay un usuario logueado
  	async isAuthenticated(): Promise<boolean> {
		const { data } = await this.supabase.auth.getUser();
		return !!data?.user;
  	}
}
