import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-shopping-list',
  templateUrl: './view-shopping-list.page.html',
  styleUrls: ['./view-shopping-list.page.scss'],
})
export class ViewShoppingListPage implements OnInit {

  shopplist  = [
    {product:"Product 1" , quatity:"2" , desc:"2KG" , price:[1 , 2, 3]}  ,
    {product:"Product 1" , quatity:"2" , desc:"2KG" , price:[1 , 2, 3]} ,
    {product:"Product 1" , quatity:"2" , desc:"2KG" , price:[1 , 2, 3]} ,
    {product:"Product 1" , quatity:"2" , desc:"2KG" , price:[1 , 2, 3]} 
  ]

  constructor() { }

  ngOnInit() {
  }

}
