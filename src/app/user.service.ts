import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    console.log('getting users');
    const geturl = 'http://localhost:8080/Controller?action=getUsers';
    return this.http.get<User[]>(geturl);
  }

  updateUser(user: User) {
    const postUrl = 'http://localhost:8080/Controller?action=updateUser&firstname=' + user.firstname + '&lastname=' + user.lastname + '&age=' + user.age + '&gender=' + user.gender + '&email=' + user.email;
    this.http.post(postUrl, null ).subscribe(check => {console.log('updated ' + user.firstname);
    }, check => { console.log('couldn\'t update ' + user.firstname); } );
  }
}
