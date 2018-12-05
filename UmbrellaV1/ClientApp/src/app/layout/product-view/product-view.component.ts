import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../../shared/services/advertisement.service';
import { Advertisement } from '../../shared/models/advertisement';
import { ImageService } from '../../shared/services/image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  advertisement: Advertisement;
  urls: string[] = [];

  constructor(
    private advertisementService: AdvertisementService,
    private imageService: ImageService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(
      params => {
        this.advertisementService.find(params['id']).subscribe(
          data => {
            this.advertisement = data;
            for (let item of this.advertisement.Image) {
              this.urls.push(imageService.getImageUrl(item.AdvertisementId, item.Secuencial));
            }
          });
      }
    );
  }

  ngOnInit() {
  }

}
