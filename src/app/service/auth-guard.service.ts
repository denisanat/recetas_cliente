import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { SupabaseService } from "./supabase.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private supabase: SupabaseService, private router: Router) { }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
        const isAuthenticated = await this.supabase.isAuthenticated();
        if (isAuthenticated) {
            return true; // Usuario autenticado, permite acceso
        } else {
            return this.router.createUrlTree(['/login']); // Redirige al login si no está autenticado
        }
    }
}
