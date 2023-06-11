import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(public httpClient : HttpClient) { }

  ngOnInit(): void {
    var users;
     this.httpClient.get<any>('https://localhost:44346/User/GetAll').subscribe(
      res => { users = res }
    );
    console.log(users);
  }

  

}
