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
import { Image } from '../../shared/models/image';
import { ImageService } from '../../shared/services/image.service';

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
  imageFile: File;
  imageChage: boolean;
  url: string | ArrayBuffer;

  constructor(
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private cityService: CityService,
    private advertisementService: AdvertisementService,
    private fb: FormBuilder,
    private imageService: ImageService
  ) {
    this.createForm();
    this.categoryService.getAll().subscribe(
      data => {
        this.categories = data;
      },
      err => {
        console.error(err);
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
      Title: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      Price: ['', [Validators.required]],
      CityId: ['', [Validators.required]],
      CategoryId: ['', [Validators.required]],
      SubCategoryId: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    let productPublication: Advertisement = Object.assign({}, this.productPublicationForm.value);
    productPublication.UserId = 3;
    this.advertisementService.save(productPublication).subscribe(
      data => {
        this.imageService
          .uploadImage(data.AdvertisementId, 1, this.imageFile)
          .subscribe(data => {

          },
          err => {
            console.error(err);
          });
      },
      err => {
        console.error(err);
      });
  }

  onChangeCategory() {
    this.productPublicationForm.value.SubCategoryId = null;
    this.subCategoryService.getAll().subscribe(
      data => {
        this.subCategories = data.filter(x => x.CategoryId === this.productPublicationForm.value.CategoryId);
      },
      err => {
        console.log(err);
      });
  }

  onFileChange(event: any) {
    console.log('En el evento');
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      this.imageFile = event.target.files[0];
      reader.onload = (evente: ProgressEvent) => {
        this.url = (<FileReader>evente.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
