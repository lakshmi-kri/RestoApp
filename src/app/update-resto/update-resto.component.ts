import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alert:boolean=false;
  updateRestaurant=new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
    email:new FormControl(''),

  })

  ngOnInit():void {
    console.log('2nd executed step');
    console.log(this.route.snapshot.params.id)
    this.commonService.getCurrentData(this.route.snapshot.params.id)
    .subscribe((result)=>{
      console.log(result.data);
    this.updateRestaurant=new FormGroup({
        name:new FormControl(result.data[0].name),
        address:new FormControl(result.data[0].address),
        email:new FormControl(result.data[0].email)
      })
    }
  )}


  constructor(private commonService:CommonService,private route:ActivatedRoute) { 
    console.log('1st executed step');
  }


  UpdateData(){
    console.log('3rd executed step');
    console.log('reached update function');
    this.commonService.updateData(this.route.snapshot.params.id,this.updateRestaurant.value)
    .subscribe(result=>console.log("Resultdata updated successfully",result))
    this.alert=true;
    this.updateRestaurant.reset({});
  }
  
 
  closeAlert(){
    console.log('4th executed step');
    this.alert=false;
  }

}
