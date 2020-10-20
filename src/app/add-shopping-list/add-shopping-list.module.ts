import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddShoppingListPageRoutingModule } from './add-shopping-list-routing.module';

import { AddShoppingListPage } from './add-shopping-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddShoppingListPageRoutingModule
  ],
  declarations: [AddShoppingListPage]
})
export class AddShoppingListPageModule {}
