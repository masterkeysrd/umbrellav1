import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/services/category.service';
import { Category } from '../../shared/models/category';
import { SubCategoryService } from '../../shared/services/sub-category.service';
import { SubCategory } from '../../shared/models/sub-category';
import { CityService } from '../../shared/services/city.service';
import { City } from '../../shared/models/city';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Advertisement } from '../../shared/models/advertisement';
import { AdvertisementService } from '../../shared/services/advertisement.service';
import * as moment from 'moment';

@Component({
  selector: 'app-product-publication',
  templateUrl: './product-publication.component.html',
  styleUrls: ['./product-publication.component.css']
})
export class ProductPublicationComponent implements OnInit {
  categories: Category[];
  subCategories: SubCategory[];
  cities: City[];
  productPublicationForm: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private cityService: CityService,
    private advertisementService: AdvertisementService,
    private fb: FormBuilder
  ) {
    this.createForm();
    this.categoryService.getAll().subscribe(
      data => {
        this.categories = data;
        console.log(this.categories);
      },
      err => {
        console.error(err);
      });
    this.subCategoryService.getAll().subscribe(
      data => {
        this.subCategories = data;
        console.log(data);
      },
      err => {
        console.log(err);
      });
    this.cityService.getAll().subscribe(
      data => {
        this.cities = data;
      },
      err => {
        console.error(err);
      });
  }

  ngOnInit() { }

  createForm(): void {
    this.productPublicationForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      cityId: ['', [Validators.required]],
      subCategoryId: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    let productPublication: Advertisement = Object.assign({}, this.productPublicationForm.value);
    productPublication.userId = 3;
    console.log('Enviando data...');
    console.log(productPublication);
    this.advertisementService.save(productPublication).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.error(err);
      });
  }
}
