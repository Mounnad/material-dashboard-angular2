import { Injectable, Inject, Optional } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from 'app/services/auth.service';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  constructor( private authService: AuthService) { }

  intercept(req: any, next: HttpHandler) {
    const token = this.authService.getJWTToken();
    console.log('token interceptor : ',token)
    req = req.clone({
      url: req.url,
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(req);
  }
}