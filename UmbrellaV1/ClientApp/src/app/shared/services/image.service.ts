import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl: string;

  constructor(@Inject('BASE_URL') baseUrl: string) {
    this.apiUrl = baseUrl + 'api/v1/images/';
  }

  getImageUrl(id: number, secuencial: number): string {
    return this.apiUrl + 'download/advertistement/' + id + '/' + secuencial;
  }
}
