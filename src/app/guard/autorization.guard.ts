import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { JWTTokenService } from 'app/services/jwttoken.service';
import { LocalStorageService } from 'app/services/local-storage.service';
import { Observable } from 'rxjs'; 


@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {
 
  constructor(private authService: AuthService,
              private authStorageService: LocalStorageService,
              private jwtService: JWTTokenService,
              private localStorageService : LocalStorageService,
              private router: Router) {
          this.jwtService.setToken(this.localStorageService.get('token'));
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
      if (this.jwtService.getUser()) {
          if (this.jwtService.isTokenExpired()) {
            // Should Redirect Sig-In Page
          } else {
            return true;
          }
      } else {
        console.log("You are not authorized !");
        //redirect("");
        this.router.navigate(['Login']);
        return false;
        //return new Promise((resolve) => {
         // this.authService.signIncallBack().then((e) => {
            // resolve(true);
          //}).catch((e) => {
            // Should Redirect Sign-In Page
          //});
        //});
      }
  }
}