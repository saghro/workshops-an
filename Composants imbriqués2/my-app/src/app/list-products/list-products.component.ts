import { Component ,OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  productList: Product[] = [];
  constructor(){}
  ngOnInit(): void {
      this.productList = [
        
          {id:1,title:"T_shirt 1",price:18,quantity:0,like:0},
          {id:2,title:"T_shirt 2",price:21,quantity:10,like:0},
          {id:3,title:"T_shirt 3",price:16,quantity:8,like:0},
          {id:4,title:"T_shirt 4",price:45,quantity:44,like:0},
          {id:5,title:"T_shirt 5",price:154,quantity:45,like:0},
         
      ]
  }
}
