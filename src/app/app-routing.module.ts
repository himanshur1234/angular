import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashBoadComponent } from './pages/admin/dash-boad/dash-boad.component';
import { UserDashboadComponent } from './pages/user/user-dashboad/user-dashboad.component';
import { adminGuard } from './services/admin.guard';
import { normalGuard } from './services/normal.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path: 'signup',
    component: SignupComponent,
    pathMatch :'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: DashBoadComponent,
    pathMatch: 'full',
    canActivate:[adminGuard]
  },
  {
    path :'user-dashboad',
    component: UserDashboadComponent,
    pathMatch: 'full',
    canActivate:[normalGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
