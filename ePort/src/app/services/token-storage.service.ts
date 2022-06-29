import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService implements HttpInterceptor {

  // injecting Injector instead of authservice to prevent cyclic dependency
  constructor(private authService: AuthService) {
   }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("INTERCEPTOR")
    let tokenizedReq = req.clone({
      setHeaders: {
        "Access-Control-Allow-Origin": "origin-list",
        Authorization: `${this.authService.getAuthToken()}`
      }
    })
      return next.handle(tokenizedReq)
  }
}
