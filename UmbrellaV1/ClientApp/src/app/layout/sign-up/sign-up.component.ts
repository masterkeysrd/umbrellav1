import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.signUpForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      mail: ['', Validators.compose([Validators.required, Validators.email])],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      phone: ['', Validators.required],
      cell: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  onSubmit() {
    let result: User = Object.assign({}, this.signUpForm.value);
    result.roleId = 1;
    result.cityId = 1;
    result.userId = 1;
    this.userService.save(result)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.info(result);
        console.error(error);
      })
  }
}
