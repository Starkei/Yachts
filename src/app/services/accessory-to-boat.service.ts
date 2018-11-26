import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccessoryToBoatService {
 
  baseUrl: string = 'http://localhost:8080/accessoryToBoat';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+"/all");
  }

  getByNum(num: number): Observable<any[]> {
    const url = `${this.baseUrl}/findByNum/${num}`;
    return this.http.get<any[]>(url);
  }
}
