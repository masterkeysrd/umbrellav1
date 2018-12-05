import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../../shared/services/advertisement.service';
import { Advertisement } from '../../shared/models/advertisement';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  advertisements: Advertisement[];
  count: number;

  constructor(private advertisementService: AdvertisementService) {
    this.count = 0;
    this.advertisementService.getAll().subscribe(
      data => {
        this.advertisements = data;
        this.count = this.advertisements.length;
      },
      err => {
        console.error(err);
      });
  }

  ngOnInit() {
  }

}
