import { CustumerModel } from './../models/custumer.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustumerService {

  public baseURI: string = environment.urlAddress;

  constructor(private htpp: HttpClient) { }

  getAllCustumers(): Observable<any>{
    return this.htpp.get(this.baseURI+ 'custumers');
  }

  addCustumer(custumer: CustumerModel): Observable<any>{
    return this.htpp.post(this.baseURI+ 'custumers', custumer);
  }

  deleteCustumer(id:number): Observable<any>{
    return this.htpp.delete(this.baseURI+ 'custumers/' + id);
  }

  getCustumerById(id:number): Observable<any>{
    return this.htpp.get(this.baseURI+ 'custumers/' + id);
  }

  putCustumer(custumer: CustumerModel, id: number){
    return this.htpp.put(this.baseURI + 'custumers/' + id, custumer);
  }
}
