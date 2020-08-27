import { CustumerModel } from './../models/custumer.model';
import { Component, OnInit } from '@angular/core';
import { CustumerService } from '../services/custumer.service';

@Component({
  selector: 'app-list-custumer',
  templateUrl: './list-custumer.component.html',
  styleUrls: ['./list-custumer.component.css']
})
export class ListCustumerComponent implements OnInit {

  listeCustumer = [] as CustumerModel[];

  constructor(private service: CustumerService) { }

  ngOnInit(): void{
    this.loadCustumer();
  }

  deleteCustumer(id: number): void{
    this.service.deleteCustumer(id).subscribe(
      (data) => this.loadCustumer(),
      (error) => console.log(error)
    );
  }

  loadCustumer(): void{
    this.service.getAllCustumers().subscribe(
      (data) => this.listeCustumer = data,
      (error) => console.log(error)
    );
  }

}
