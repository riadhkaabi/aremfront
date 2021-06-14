import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../app/Entities/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST,GET,DELETE,PUT',
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl: string;

  constructor(private http: HttpClient) { 
    this.userUrl ='aremproj.herokuapp.com';

  }
  public details(username: String,password: String) {
    return this.http.get('http://aremproj.herokuapp.com/getUser/' + username +'/'+password,httpOptions);
  }
  public addUser(user:User){
    return this.http.post('http://aremproj.herokuapp.com/addUser', user,httpOptions);

  }
  public getRoleById(id:number) {
    return this.http.get('http://aremproj.herokuapp.com/getRolebyId/' + id ,httpOptions);
  }
}
