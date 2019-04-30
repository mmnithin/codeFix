import { Component, OnInit } from '@angular/core';

import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { UserService } from '../../user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  
  constructor(private userService: UserService,private router : Router) { }

  
  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  ngOnInit() {
    if(this.userService.isLoggedIn())
    this.router.navigateByUrl('/admin-profile');
  }

  onSubmit(form : NgForm){
    this.userService.Admin(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/admin-profile');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}
