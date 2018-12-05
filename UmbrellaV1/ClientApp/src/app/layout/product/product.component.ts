import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../../shared/services/advertisement.service';
import { Advertisement } from '../../shared/models/advertisement';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  advertisements: Advertisement[];
  count: number;

  constructor(
    private advertisementService: AdvertisementService,
    private route: ActivatedRoute
  ) {
    this.count = 0;
    this.route.queryParams.subscribe(
      data => {
        if (data.search) {
          this.search(data.search);
        }
        else {
          this.getAll();
        }
      });
  }

  ngOnInit() {
  }

  getAll() {
    this.advertisementService.getLast().subscribe(
      data => {
        this.advertisements = data;
        this.count = this.advertisements.length;
      },
      err => {
        console.error(err);
      });
  }

  search(searchText: string) {
    const query: any = {
      search: searchText
    };

    this.advertisementService.search(query).subscribe(
      data => {
        this.advertisements = data;
        this.count = this.advertisements.length;
      },
      err => {
        console.error(err);
      });
  }
}
