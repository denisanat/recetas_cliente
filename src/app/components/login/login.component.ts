import { Component } from '@angular/core';
import { SupabaseService } from '../../service/supabase.service';
import { FormsModule } from '@angular/forms';


@Component({
	selector: 'app-login',
    imports: [FormsModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.css'
})
export class LoginComponent {
	email: string = '';
	password: string = '';

	constructor(private supabase: SupabaseService) {}

	async onLogin() {
		try {
			const data = await this.supabase.login(this.email, this.password);
			console.log('Login exitoso', data);
			alert('Login exitoso');
		} catch (error: any) {
			console.error('Error en el login:', error.message);
			alert(`Error: ${error.message}`);
		}
	}
}
