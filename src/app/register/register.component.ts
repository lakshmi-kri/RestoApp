import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUser=new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''),
    email:new FormControl('')
  
  })
  
  constructor(private commonService:CommonService,private router:Router) { }
  
 

  ngOnInit() {
  }
  regUser(){
    console.log(this.registerUser.value);
    this.commonService.addUser(this.registerUser.value)
    .subscribe(result=>console.log(result,"registered successfully"))
    {this.router.navigateByUrl("/home")}
  }

}
