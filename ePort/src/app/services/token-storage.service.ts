import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService implements HttpInterceptor {

  // injecting Injector instead of authservice to prevent cyclic dependency
  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    let authService = this.injector.get(AuthService) 
    let token = authService.getAuthToken()
    localStorage.setItem('token', token)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getAuthToken()}`
      }
    })
      return next.handle(tokenizedReq)
  }
}
