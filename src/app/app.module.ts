import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';


import { routes } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignupComponent } from './home/signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './home/sign-in/sign-in.component';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserService } from './user.service';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { AdminDashComponent } from './Admin/admin-dash/admin-dash.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AddTutorialsComponent } from './Admin/add-tutorials/add-tutorials.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    UserComponent,
    SignInComponent,
    ProfileEditComponent,
    AdminDashComponent,
    AdminLoginComponent,
    AddTutorialsComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
   
    HomeModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
