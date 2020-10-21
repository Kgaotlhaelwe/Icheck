import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ViewShoppingListPage} from "../view-shopping-list/view-shopping-list.page"

@Component({
  selector: 'app-add-shopping-list',
  templateUrl: './add-shopping-list.page.html',
  styleUrls: ['./add-shopping-list.page.scss'],
})
export class AddShoppingListPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3
    
  };


  products = [
  {name:"" , categoery:"" , size: "" , image:""}
  ]

  product1:boolean =true;
  

  constructor(private modalCtrl: ModalController) { }




  
  ngOnInit() {
  }

  show(){
  this.product1=false
  }

  viewShoppingList(){
    this.presentModal();
  }


  async presentModal() {
    const modal = await this.modalCtrl.create({
      component:ViewShoppingListPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      presentingElement: await this.modalCtrl.getTop() // Get the top-most ion-modal
    });
    return await modal.present();
  }

}
