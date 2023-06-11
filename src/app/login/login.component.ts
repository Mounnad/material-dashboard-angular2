import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'app/models/user';
import { LocalStorageService } from 'app/services/local-storage.service';
import { map } from 'rxjs';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : User;
  email = new FormControl();
  firstName = new FormControl();
  lastName = new FormControl();
  password = new FormControl();
  confirmPassword = new FormControl();

  constructor(public httpClient : HttpClient,
              public localStorageService: LocalStorageService,
              public router: Router
    ) { }

  ngOnInit(): void {
        //Check if token is exits

        if(this.localStorageService.get('token')!= undefined)
            this.router.navigateByUrl('');
  }

  login()
  {

    this.user = new User();
    this.user.email = this.email.value;
    this.user.password = this.password.value;

    var token = this.httpClient.post<any>('https://localhost:44346/api/Login/Index',this.user)
       .subscribe(result => {
          this.localStorageService.set('token',result.tokenFinal)
       });
      
    
  }

}
