import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../home/admin/admin.component';
import { DefaultUserComponent } from '../home/default-user/default-user.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';


const routes: Routes = [
  // add home paths 
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
    component: DefaultUserComponent
  }, 
  {
    path: 'admin',
    component: AdminComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
