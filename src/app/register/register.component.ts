import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'app/models/user';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User;
  email = new FormControl();
  firstName = new FormControl();
  lastName = new FormControl();
  password = new FormControl();
  confirmPassword = new FormControl();

  constructor(public httpClient : HttpClient) { }

  ngOnInit(): void {
  }

  register()
  {
    this.user = new User();
    this.user.lastName = this.lastName.value;
    this.user.firstName = this.firstName.value;
    this.user.email = this.email.value;
    this.user.password = this.password.value;
    if(this.password.value == this.confirmPassword.value)
    {
       this.httpClient.post<User>('https://localhost:44346/api/Login/Register',this.user)
       .subscribe();
    }
  }
}
