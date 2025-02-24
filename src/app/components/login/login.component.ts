import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
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

	constructor(private supabase: SupabaseService, private cd: ChangeDetectorRef) {}

	async onLogin() {
		try {
			const data = await this.supabase.login(this.email, this.password);
			alert('Login exitoso (F5 para actualizar vista)');
			this.cd.detectChanges();
		} catch (error: any) {
			alert(`Error: ${error.message}`);
		}
	}
}
