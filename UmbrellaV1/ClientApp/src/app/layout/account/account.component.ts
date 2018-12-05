import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) {
    this.userService.getAutenticateUser().subscribe(
      data => {
        this.user = data;
      });
  }

  ngOnInit() {
  }
}
