import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })
  
  constructor(private router: Router) { }

  ngOnInit() {
  }
  log(){
    console.log(this.login.get('email').value);
    if(this.login.get('email').value=="admin123.com" && this.login.get('password').value=="admin")
    {this.router.navigateByUrl("/partner_with_us")}
    else{
      alert("please enter valid details");
    }
    
    
  }

}
