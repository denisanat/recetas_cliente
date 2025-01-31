import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { Observable, from } from 'rxjs';
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
}
