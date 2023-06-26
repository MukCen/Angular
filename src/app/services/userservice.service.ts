import { IUser } from './../interfaces/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
private apiUrl='https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }
  getUser(userId: number): Observable<IUser>{
    return this.http.get<IUser>(`${this.apiUrl}/${userId}`);
  }
}
