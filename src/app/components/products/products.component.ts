import { Component, OnInit } from '@angular/core';
import {DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getProductData();
  }
  getProductData(){
    console.log('lista de productos');
   this.dataService.getData().subscribe(res =>{
     console.log(res);
   })

  }

}
