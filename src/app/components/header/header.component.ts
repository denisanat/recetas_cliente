import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SupabaseService } from '../../service/supabase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  usuarioEmail: string | null = null;

  constructor(private supabase: SupabaseService) {};

  async onLogout() {
    await this.supabase.logout();
    alert('Sesión cerrada');
    this.usuarioEmail = null;
  }

  async ngOnInit() {
    const { data } = await this.supabase.getUser();
    this.usuarioEmail = data.user?.email ?? null;
  }
}
