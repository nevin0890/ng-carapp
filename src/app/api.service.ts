import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  getCarList = () => {
    return this.http.get("https://myfakeapi.com/api/cars")
  }
}
