import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../account/signup/signup.component';


const routes: Routes = [
  // add home paths 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'account/signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
