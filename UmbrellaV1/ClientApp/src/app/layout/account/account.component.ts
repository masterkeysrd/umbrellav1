import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  personalData: FormGroup;
  user: User;

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.createForm();
    this.userService.getAutenticateUser().subscribe(
      data => {
        this.user = data;
        this.setData();
        console.log(data);
      });
  }

  ngOnInit() {
  }

  createForm() {
    this.personalData = this.fb.group({
      Name: ['', [Validators.required]],
      Mail: ['', [Validators.required]],
      UserName: ['', [Validators.required]]
    });
  }

  setData() {
    this.personalData.setValue({
      'name': this.user.Name,
      'mail': this.user.Mail,
      'UserName': this.user.UserName
    });
  }
}
