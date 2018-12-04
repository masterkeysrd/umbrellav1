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

  constructor(private advertisementService: AdvertisementService) {
    console.log('Test');
    this.advertisementService.getAll().subscribe(
      data => {
        this.advertisements = data;
        console.log(data);
      },
      err => {
        console.error(err);
      });
  }

  ngOnInit() {
  }

}
