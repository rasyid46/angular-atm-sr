import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import {UserComponent } from './user/user.component';
import {LoginComponent} from './login/login.component';
import { ChildComponent } from './child/child.component'; 
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'child', component: ChildComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule , RouterModule.forRoot(routes) 
  ],
  declarations: []
})
export class AppRoutingModule { }