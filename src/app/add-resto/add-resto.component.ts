import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
  alert:boolean=false;
  AddRestaurant=new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
    mobile:new FormControl(''),
    email:new FormControl(''),
  })

  constructor(private commonService:CommonService) { }

  ngOnInit() {
  }

  createResto(){
     this.commonService.addResto(this.AddRestaurant.value)
    .subscribe((data)=>{
      this.alert=true;
      this.AddRestaurant.reset({});
      console.log("Get data from service",data)
    })
  }
    // console.log(this.AddRestaurant.value)}
  
  closeAlert(){
    this.alert=false;
  }


}