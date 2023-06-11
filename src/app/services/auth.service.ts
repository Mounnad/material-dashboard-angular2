import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/user';
import { retry } from 'rxjs-compat/operator/retry';
import { JWTTokenService } from './jwttoken.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public jWTTokenService: JWTTokenService,
    public httpClient: HttpClient,
    public localStorageService: LocalStorageService
    ) { }

  getJWTToken() {
    let token = this.localStorageService.get('token');
    this.jWTTokenService.setToken(token);
    return token;
  }

  signIncallBack() {
      throw new Error('Method not implemented.');
  }

  UrlApi = 'https://localhost:44346/api/';



  createUser(user: User)
  {
    this.httpClient.post<User>(this.UrlApi + 'Login/Register', user);
  }
}
