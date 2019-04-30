import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './home/signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './home/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ExpertsLoginComponent } from './home/experts-login/experts-login.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminDashComponent } from './Admin/admin-dash/admin-dash.component';
import { AddTutorialsComponent } from './Admin/add-tutorials/add-tutorials.component';



export const routes: Routes =[
    
    { path: 'user-profile',     component: ProfileComponent ,canActivate:[AuthGuard] },
    {path:'admin-profile' ,component:AdminDashComponent ,canActivate:[AuthGuard]},
    { path: 'user-profile-edit',     component: ProfileEditComponent  },
    {path:'add-tutorials',component:AddTutorialsComponent,canActivate:[AuthGuard]},
  
    { path: 'landing',          component: LandingComponent,canActivate:[AuthGuard] },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    {
        path:'admin',component:AdminLoginComponent
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
      path: 'signup', component: HomeComponent,
      children: [{ path: '', component: SignupComponent }]
  },
  {
      path: 'login', component: HomeComponent,
      children: [{ path: '', component: SignInComponent }]
  },{
    path: 'Experts-login', component: HomeComponent,
    children: [{ path: '', component: ExpertsLoginComponent }]
},

];

