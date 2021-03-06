import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessoryService {

  baseUrl: string = 'http://localhost:8080/accessory';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+"/all");
  }

  getByPrice(price: number): Observable<any[]> {
    const url = `${this.baseUrl}/findByPrice/${price}`;
    return this.http.get<any[]>(url);
  }
}
