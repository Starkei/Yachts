import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesPersonService {

  baseUrl: string = 'http://localhost:8080/salesPerson';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+"/all");
  }

  getByNum(num: number): Observable<any[]> {
    const url = `${this.baseUrl}/findByNum/${num}`;
    return this.http.get<any[]>(url);
  }
}
