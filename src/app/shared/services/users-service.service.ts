import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private apiUrl = 'http://localhost:8020';

  constructor(private http:HttpClient) { }

  public getUsersByRole(role:string): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}/auth/userRole?role=${role}`);
  }
}
