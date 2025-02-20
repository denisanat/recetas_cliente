import { Component } from '@angular/core';
import { SupabaseService } from '../../service/supabase.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private supabase: SupabaseService) {}

  async onRegister() {
    try {
      const data = await this.supabase.register(this.email, this.password);
      console.log('Registro exitoso:', data);
      alert('Registro exitoso. Revisa tu correo para verificar tu cuenta.');
    } catch (error: any) {
      console.error('Error en el registro:', error.message);
      alert(`Error: ${error.message}`);
    }
  }
}
