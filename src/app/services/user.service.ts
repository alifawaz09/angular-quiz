import { Injectable } from '@angular/core';
import { User, UserApiResponse } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://reqres.in/api/users';
  private userCache = new Map<number, User>();

  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'x-api-key': 'reqres-free-v1'
  });

  getUsers(page: number): Observable<UserApiResponse> {
    return this.http.get<UserApiResponse>(`${this.baseUrl}?page=${page}`, { headers: this.headers });
  }

  getUserById(id: number): Observable<{ data: User }> {
    if (this.userCache.has(id)) {
      return of({ data: this.userCache.get(id)! });
    }

    return this.http.get<{ data: User }>(`${this.baseUrl}/${id}`, { headers: this.headers }).pipe(
      tap(res => this.userCache.set(id, res.data))
    );
  }
}
