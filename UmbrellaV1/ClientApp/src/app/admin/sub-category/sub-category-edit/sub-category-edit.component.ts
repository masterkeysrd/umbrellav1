import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from '../../../shared/services/sub-category.service';
import { CategoryService } from '../../../shared/services/category.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../../shared/models/category';
import { SubCategory } from '../../../shared/models/sub-category';

@Component({
  selector: 'app-sub-category-edit',
  templateUrl: './sub-category-edit.component.html',
  styleUrls: ['./sub-category-edit.component.css']
})
export class SubCategoryEditComponent implements OnInit {

  subCategoryForm: FormGroup;
  categories: Category[];

  constructor(
    private subCategoryService: SubCategoryService,
    private categoryService: CategoryService,
    private fb: FormBuilder) {
    this.createForm();
    this.categoryService.getAll().subscribe(
      data => {
        this.categories = data;
        console.log(data);
      },
      err => {
        console.error(err);
      });
  }

  ngOnInit() {
  }

  createForm() {
    this.subCategoryForm = this.fb.group({
      categoryId: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const subCategory: SubCategory = Object.assign({}, this.subCategoryForm.value);
    console.log('Enviando data');
    console.log(subCategory);
    this.subCategoryService.save(subCategory).subscribe(
      response => {
        console.log(response);
      },
      err => {
        console.error(err);
      });
  }
}
