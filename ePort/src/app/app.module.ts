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
import { AuthGuard } from './auth.guard';
import { UserDetailsComponent } from './default-user/user-details/user-details.component';
import { BiddingHistoryComponent } from './default-user/bidding-history/bidding-history.component';
import { AuctionsComponent } from './default-user/auctions/auctions.component';
import { AuctionDetailsComponent } from './default-user/auction-details/auction-details.component';
import { StatusForbiddenComponent } from './http-status-redirect/status-forbidden/status-forbidden.component';
import { StatusNotFoundComponent } from './http-status-redirect/status-not-found/status-not-found.component';

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
    AddAuctionComponent,
    UserDetailsComponent,
    BiddingHistoryComponent,
    AuctionsComponent,
    AuctionDetailsComponent,
    StatusForbiddenComponent,
    StatusNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenStorageService,
      multi: true
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
