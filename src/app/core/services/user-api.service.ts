import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id?:string;
  name:string;
  email:string;
  role:string;
  experience: number;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor() { }

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/users';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(id:string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl,user);
  }

  upadteUser(id:string, user:User): Observable<User> {
    return this.http.put<User>(
      `${this.apiUrl}/${id}`,user
    );
  }

  deleteUser(id:string): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/${id}`);
  }


}
