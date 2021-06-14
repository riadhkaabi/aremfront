import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../app/Entities/Product';

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
export class ProductService {

  private ApiUrl:String 
  constructor(private http: HttpClient) { 
    this.ApiUrl = 'aremproj.herokuapp.com'
  }

  public findAllZap(): Observable<Product> {
    return this.http.get<Product>('http://aremproj.herokuapp.com/zapproducts',httpOptions);
  }
  public findAllFiamm(): Observable<Product> {
    return this.http.get<Product>('http://aremproj.herokuapp.com/fiammproducts',httpOptions);
  }
}
