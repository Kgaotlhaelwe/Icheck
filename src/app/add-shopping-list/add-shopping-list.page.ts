import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-shopping-list',
  templateUrl: './add-shopping-list.page.html',
  styleUrls: ['./add-shopping-list.page.scss'],
})
export class AddShoppingListPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    slidesPerView: 3
    
  };


  products = [
  {name:"" , categoery:"" , size: "" , image:""}
  ]

  product1:boolean =true;
  

  constructor() { }




  
  ngOnInit() {
  }

  show(){
this.product1=false
  }

}
