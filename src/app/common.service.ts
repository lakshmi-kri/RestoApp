import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IData } from './interface';
import { Observable, throwError } from 'rxjs';
import { ICommon } from './ICommon';
import {map, catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root' 
})
export class CommonService {
private _url="http://localhost:8000/resto";
private regUrl="http://localhost:3000/users";

  constructor(private http:HttpClient) { }

getData(): Observable<any> {
  return this.http.get(this._url).pipe(
    map((e:Response)=> {
      return e;
    }),
    catchError((e:Response)=> throwError(e))
  );
}

addResto(data){
  // console.log(data);
  // data['restid']=6;
  return this.http.post(this._url,data);
}
deleteData(id){
  return this.http.delete(this._url+'/'+id);
}
// getCurrentData(id){
//   return this.http.get(`${this._url}/${id}`);
// }

getCurrentData(id): Observable<any> {
  return this.http.get(`${this._url}/${id}`).pipe(
    map((e:Response)=> {
      return e;
    }),
    catchError((e:Response)=> throwError(e))
  );
}

updateData(id,data){
  data['restid']=id;
  return this.http.put(`${this._url}/${id}`,data);
}

addUser(data){
  return this.http.post(this.regUrl,data)
}

}
