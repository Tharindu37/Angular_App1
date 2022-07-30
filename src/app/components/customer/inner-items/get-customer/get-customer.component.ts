import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.scss']
})
export class GetCustomerComponent implements OnInit {

  constructor(private _router: ActivatedRoute) { }

  ngOnInit(): void {
    this._router.paramMap.subscribe(data=>{
      console.log(data.get('id'));
    })
  }

}
