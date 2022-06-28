import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,private route:Router){

  }
  // checks whether or not method exists in local storage...only happens on login/register
  canActivate(): boolean {
if(this.authService.isLoggedIn()){
  return true;
} else {
  this.route.navigate(['/login']);
  return false;
}
  }
}
