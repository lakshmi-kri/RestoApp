import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';
import { IData } from '../interface';
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  public listData:IData[];
  result: any;
    constructor(private _CommonService: CommonService,private route:ActivatedRoute) { }

  ngOnInit() {

    this._CommonService.getData()
    .subscribe(data=>{
      this.listData=data.data;
      // this.result = this.listData;

    });
  }

  deleteData(id){
    console.log('deleted',id);
    this._CommonService.deleteData(id)
    .subscribe(response => {
        this.result = response;
        console.log("deleted successfully:", this.result);
        this._CommonService.getData()
        .subscribe(data=>this.listData=data.data);
      }
    );
  }


  
}
