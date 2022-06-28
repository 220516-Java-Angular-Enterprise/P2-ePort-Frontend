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
    console.log(req)
    let tokenizedReq = req.clone({
      setHeaders: {
        "Access-Control-Allow-Origin": "origin-list",
        Authorization: `${this.authService.getAuthToken()}`
      }
    })
    if(this.authService.getAuthToken() == null) {
      console.log('INTERCEPTOR')
      return next.handle(tokenizedReq)
    }
      return next.handle(tokenizedReq)
  }
}
