import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup} from '@angular/forms'



import { NgForm } from '@angular/forms';

import { UserService } from '../../user.service';
import { HttpBackend } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-add-tutorials',
  templateUrl: './add-tutorials.component.html',
  styleUrls: ['./add-tutorials.component.scss']
})
export class AddTutorialsComponent implements OnInit {


  selectedFile :File=null;

  test : Date = new Date();
  focus;
  focus1;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
showSucessMessage: boolean;
serverErrorMessages: string;
tutorialForm;


constructor(private _userService: UserService , private http:HttpBackend) { }
 
  

 
  ngOnInit() {
    this.tutorialForm=new FormGroup({

      topic:new FormControl()
    })
  }
  onSubmit(tutorialForm){
    console.log(tutorialForm.value);
  }


 
}
