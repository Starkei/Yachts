import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  baseUrl: string = 'http://localhost:8080/orderDetails';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+"/all");
  }

  getByNum(name: string): Observable<any[]> {
    const url = `${this.baseUrl}/findByName/${name}`;
    return this.http.get<any[]>(url);
  }
}
