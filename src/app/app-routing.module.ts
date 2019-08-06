import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import {UserComponent } from './user/user.component';
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: UserComponent },
  { path: 'dashboard', component: DashboardComponent },
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