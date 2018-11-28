import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoatService {
  baseUrl: string = 'http://localhost:8080/boat';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+"/all");
  }

  getByNum(num: number): Observable<any[]> {
    const url = `${this.baseUrl}/findByNum/${num}`;
    return this.http.get<any[]>(url);
  }
}
