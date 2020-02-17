import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home-page/home-page.module#HomePageModule'
  },
  {
    path: 'login',
    loadChildren:
      './pages/login/login.module#LoginModule'
  },
  {
    path: 'sign-up',
    loadChildren:
      './pages/sign-up/sign-up.module#SignUpModule'
  },
  {
    path: 'forgot-password',
    loadChildren:
      './pages/forgot-password/forgot-password.module#ForgotPasswordModule'
  },
  {
    path: 'reset-password',
    loadChildren:
      './pages/reset-password/reset-password.module#ResetPasswordModule'
  },
  {
    path: 'project-list',
    loadChildren:
      './pages/project-list/project-list.module#ProjectListModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
