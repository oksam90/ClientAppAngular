import { CustumerModel } from './../models/custumer.model';
import { CustumerService } from './../services/custumer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-custumer',
  templateUrl: './add-custumer.component.html',
  styleUrls: ['./add-custumer.component.css']
})
export class AddCustumerComponent implements OnInit {

  custumer = new CustumerModel();
  id: number;

  constructor(private service: CustumerService,
    private activetedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this.activetedRoute.snapshot.params[this.id]);
    console.log(this.id);
    if(this.id){
    this.service.getCustumerById(this.id).subscribe(
      (data) => this.custumer = data,
      (error) => console.log(error)
      );
    }
  }

  addCustumer(): void {
    this.service.addCustumer(this.custumer).subscribe(
      (data) => {
        this.router.navigate(['custumers']);
      },
      (error) => console.log(error)
    );
  }

  editCustumer(): void{
    this.service.putCustumer(this.custumer, this.id).subscribe(
      (data) => {
        this.router.navigate(['custumers']);
      },
      (error) => console.log(error)
    );
  }
}

