import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://localhost:44346/api/';

  constructor(public httpClient: HttpClient) { }

  createUser(user: User)
  {
    this.httpClient.post<User>(this.url + 'Login/Register', user);
  }


}
