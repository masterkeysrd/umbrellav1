import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { LoginService } from './login.service';

@Injectable()
export class UserService {
  serviceUrl: string;

  constructor(
    private http: HttpClient,
    private loginServices: LoginService,
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.serviceUrl = baseUrl + 'api/v1/users';
  }

  save(user: User): Observable<User> {
    return this.http.post<User>(this.serviceUrl, user);
  }

  getAutenticateUser(): Observable<User> {
    return this.http.get<User>(this.serviceUrl + '/authenticate', { headers: this.loginServices.getHeaders() });
  }

}
