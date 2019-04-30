import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.scss']
})
export class AdminDashComponent implements OnInit {
  adminDetails;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getAdminProfile().subscribe(
      res => {
        this.adminDetails = res['admin'];
       
      },
      err => { 
        console.log(err);
        
      }
    );
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
}
