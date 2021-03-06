import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
 
@Injectable()
export class BeerService {
 
  constructor(private http: HttpClient) {}
 
  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/good-beer');
  }
}