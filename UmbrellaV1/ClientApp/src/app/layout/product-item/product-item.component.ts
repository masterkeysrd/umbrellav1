import { Component, OnInit, Input } from '@angular/core';
import { Advertisement } from '../../shared/models/advertisement';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Advertisement;

  constructor() { }

  ngOnInit() {
  }

}
