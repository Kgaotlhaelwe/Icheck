import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewShoppingListPageRoutingModule } from './view-shopping-list-routing.module';

import { ViewShoppingListPage } from './view-shopping-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewShoppingListPageRoutingModule
  ],
  declarations: [ViewShoppingListPage]
})
export class ViewShoppingListPageModule {}
