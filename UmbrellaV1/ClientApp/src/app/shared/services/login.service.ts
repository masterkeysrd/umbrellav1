import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/user-login';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  private apiUrl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.apiUrl = baseUrl + "api/v1/auth/";
  }

  login(userLogin: UserLogin): Observable<Object> {
    return this.http.post<Object>(this.apiUrl + "login", userLogin);
  }

}
