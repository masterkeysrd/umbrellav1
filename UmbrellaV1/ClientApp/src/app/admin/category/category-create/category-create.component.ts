import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../../../shared/services/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categoryForm: FormGroup;

  constructor(private categoryService: CategoryService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    
  }

  createForm() {
    this.categoryForm = this.fb.group({
      description: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const category = Object.assign({}, this.categoryForm.value);
    this.categoryService.save(category).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error(error);
      }
    );
  }
}
