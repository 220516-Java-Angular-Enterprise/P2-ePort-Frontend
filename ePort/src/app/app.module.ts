import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRouterModule } from './app-router/app-router.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { DefaultUserComponent } from './home/default-user/default-user.component';
import { AdminComponent } from './home/admin/admin.component';
import { AdminViewUsersComponent } from './admin-view-users/admin-view-users.component';
import { AdminViewAuctionsComponent } from './admin-view-auctions/admin-view-auctions.component';
import { AuthService } from './services/auth.service';
import { TokenInterceptorService} from './services/token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DefaultUserComponent,
    AdminComponent,
    AdminViewUsersComponent,
    AdminViewAuctionsComponent
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
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
