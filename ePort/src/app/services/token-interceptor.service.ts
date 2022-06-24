import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.addAuthToken(req));
    }

  addAuthToken(res: HttpRequest<any>) {
    const token = this.authService.getAuthToken();
    console.log(token);


  return res.clone({
    setHeaders: {
      Authorization: `${token}`
    }
  })
  }
}
