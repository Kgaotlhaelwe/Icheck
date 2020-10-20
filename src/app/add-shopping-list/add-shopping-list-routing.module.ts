import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddShoppingListPage } from './add-shopping-list.page';

const routes: Routes = [
  {
    path: '',
    component: AddShoppingListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddShoppingListPageRoutingModule {}
