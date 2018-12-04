import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class UserService {
  serviceUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.serviceUrl = baseUrl + 'api/v1/users';
  }

  save(user: User): Observable<Object> {
    return this.http.post<Object>(this.serviceUrl, user);
  }

}
