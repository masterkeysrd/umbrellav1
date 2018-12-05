import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../shared/services/login.service';
import { UserLogin } from '../../shared/models/user-login';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {

  public responseData: any;
  public userPostData = {
    email: '',
    name: '',
    provider: '',
    provider_id: '',
    provider_pic: '',
    token: ''
  };
  loginData: UserLogin;

  constructor(
    private loginService: LoginService,
    private socialAuthenticationService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginData = new UserLogin(null, null);
  }

  onLogin() {
    this.loginService.login(this.loginData)
      .subscribe(data => {
        let token = (<any>data).Token;
        localStorage.setItem("jwt", token);
        this.router.navigate(["/"]);
      },
        err => {
          console.error(err);
        });
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthenticationService.signIn(socialPlatformProvider).then(userData => {
      console.log(userData);

    });
  }

  onFacebookLogin() {

  }

}
