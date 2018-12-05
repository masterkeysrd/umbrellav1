import { Component, OnInit, Input } from '@angular/core';
import { Advertisement } from '../../shared/models/advertisement';
import { ImageService } from '../../shared/services/image.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Advertisement;

  imageUrl: string;
  constructor(private imageService: ImageService) {}

  ngOnInit() {
  console.log(this.productItem);
    this.imageUrl = this.imageService.getImageUrl(this.productItem.AdvertisementId, 1);
  }

}
