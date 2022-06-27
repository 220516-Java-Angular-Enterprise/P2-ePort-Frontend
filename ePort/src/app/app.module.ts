import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRouterModule } from './app-router/app-router.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { DefaultUserComponent } from './default-user/user/default-user.component';
import { AdminComponent } from './admin/admin-home/admin.component';
import { AdminViewUsersComponent } from './admin/admin-view-users/admin-view-users.component';
import { AdminViewAuctionsComponent } from './admin/admin-view-auctions/admin-view-auctions.component';
import { AdminViewUserDetailsComponent } from './admin/admin-view-user-details/admin-view-user-details.component';
import { AddAuctionComponent } from './admin/add-auction/add-auction.component';
import { TokenStorageService } from './services/token-storage.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DefaultUserComponent,
    AdminComponent,
    AdminViewUsersComponent,
    AdminViewAuctionsComponent,
    AdminViewUserDetailsComponent,
    AddAuctionComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenStorageService,
      multi: true
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
