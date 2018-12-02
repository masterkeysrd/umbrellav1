import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AdvertisingComponent } from './layout/advertising/advertising.component';
import { FilterComponent } from './layout/filter/filter.component';
import { ProductComponent } from './layout/product/product.component';
import { ProductItemComponent } from './layout/product-item/product-item.component';
import { ProductPublicationComponent } from './layout/product-publication/product-publication.component';
import { ProductViewComponent } from './layout/product-view/product-view.component';
import { PromotionComponent } from './layout/promotion/promotion.component';
import { SignUpComponent } from './layout/sign-up/sign-up.component';
import { LoginComponent } from './security/login/login.component';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider,
} from "angular-6-social-login";
import { LoginService } from './shared/services/login.service';
import { ShopsComponent } from './layout/shops/shops.component';

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("706875369694240")
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("Your-Google-Client-Id")
      },
      {
        id: LinkedinLoginProvider.PROVIDER_ID,
        provider: new LinkedinLoginProvider("1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com")
      },
    ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AdvertisingComponent,
    FilterComponent,
    ProductComponent,
    ProductItemComponent,
    ProductPublicationComponent,
    ProductViewComponent,
    PromotionComponent,
    SignUpComponent,
    LoginComponent,
    ShopsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'login', component: LoginComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'shops', component: ShopsComponent },
      { path: 'product/publication', component: ProductPublicationComponent },
    ])
  ],
  providers: [
    LoginService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
