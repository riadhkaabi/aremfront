import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../app/Entities/Request';

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
export class RequestService {

  private ApiUrl:String 
  constructor(private http: HttpClient) { 
    this.ApiUrl = 'aremproj.herokuapp.com'
  }

  public addRequest(request) {
    return this.http.post('http://aremproj.herokuapp.com/addRequest', request,httpOptions);
  }
  public getRequests() {
    return this.http.get('http://aremproj.herokuapp.com/getRequests',httpOptions);
  }
  public getTelById(id:number) {
    return this.http.get('http://aremproj.herokuapp.com/getTelbyId/' + id ,httpOptions);
  }
  public updateState(id:number) {
    return this.http.post('http://aremproj.herokuapp.com/updateRequest/'+ id,httpOptions);
  }

}
