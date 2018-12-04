import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/services/category.service';
import { Category } from '../../shared/models/category';

@Component({
  selector: 'app-product-publication',
  templateUrl: './product-publication.component.html',
  styleUrls: ['./product-publication.component.css']
})
export class ProductPublicationComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService) {
    this.categoryService.getAll().subscribe(
      data => {
        this.categories = data;
        console.log(this.categories);
      },
      err => {
        console.error(err);
      });
  }

  ngOnInit() { }

}
