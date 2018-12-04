import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advertisement } from '../models/advertisement';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  private apiUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.apiUrl = baseUrl + 'api/v1/advertisement'
  }

  getAll(): Observable<Advertisement[]> {
    return this.http.get<Advertisement[]>(this.apiUrl);
  }

  save(advertisement: Advertisement): Observable<Advertisement> {
    advertisement.createdDate = moment().utc();
    return this.http.post<Advertisement>(this.apiUrl, advertisement);
  }
}
