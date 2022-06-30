import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewAuctionsComponent } from '../admin/admin-view-auctions/admin-view-auctions.component';
import { AdminViewUsersComponent } from '../admin/admin-view-users/admin-view-users.component';
import { AdminComponent } from '../admin/admin-home/admin.component';
import { DefaultUserComponent } from '../default-user/user/default-user.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { AdminViewUserDetailsComponent } from '../admin/admin-view-user-details/admin-view-user-details.component';
import { AddAuctionComponent } from '../admin/add-auction/add-auction.component';
import { AuthGuard } from '../auth.guard';
import { CreateScpComponent } from '../admin/create-scp/create-scp.component';
import { UserDetailsComponent } from '../default-user/user-details/user-details.component';
import { FundsComponent } from '../default-user/funds/funds.component';
import { BiddingHistoryComponent } from '../default-user/bidding-history/bidding-history.component';
import { AuctionsComponent } from '../default-user/auctions/auctions.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }, 
  {
    path: 'default-user',
    component: DefaultUserComponent,
    canActivate: [AuthGuard]
  }, 
  {
    path: 'default-user/:username',
    component: UserDetailsComponent,
    canActivate: [AuthGuard]
  }, 
  {
    path: 'default-user/:username/funds',
    component: FundsComponent,
    canActivate: [AuthGuard]
  }, 
  {
    path: 'default-user/:username/history',
    component: BiddingHistoryComponent,
    canActivate: [AuthGuard]
  }, 
  {
    path: 'default-user/:username/view-auctions',
    component: AuctionsComponent,
    canActivate: [AuthGuard]
  }, 
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/view-users',
    component: AdminViewUsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/view-auctions',
    component: AdminViewAuctionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/view-auctions/newAuction',
    component: AddAuctionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/view-users/:username',
    component: AdminViewUserDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/create-scp',
    component: CreateScpComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
