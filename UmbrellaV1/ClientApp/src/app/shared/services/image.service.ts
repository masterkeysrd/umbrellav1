import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.apiUrl = baseUrl + 'api/v1/images/';
  }

  getImageUrl(id: number, secuencial: number): string {
    return this.apiUrl + 'download/advertistement/' + id + '/' + secuencial;
  }

  uploadImage(id: number, secuencial: number, file: File): Observable<Object> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    return this.http.post<Object>(this.apiUrl + 'upload/advertistement/' + id + '/' + secuencial, formdata);
  }
}
