import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerComponent} from "./components/customer/customer.component";
import {ItemComponent} from "./components/item/item.component";
import {SaveCustomerComponent} from "./components/customer/inner-items/save-customer/save-customer.component";
import {UpdateCustomerComponent} from "./components/customer/inner-items/update-customer/update-customer.component";
import {DeleteCustomerComponent} from "./components/customer/inner-items/delete-customer/delete-customer.component";
import {GetCustomerComponent} from "./components/customer/inner-items/get-customer/get-customer.component";
import {GetAllCustomerComponent} from "./components/customer/inner-items/get-all-customer/get-all-customer.component";

const routes: Routes = [
  {path:'customer', component: CustomerComponent, children: [
      {path: 'save', component: SaveCustomerComponent},
      {path: 'update', component : UpdateCustomerComponent},
      {path: 'delete', component: DeleteCustomerComponent},
      {path: 'get/:id', component: GetCustomerComponent},
      {path: 'get-all', component: GetAllCustomerComponent}
    ]},
  {path:'item', component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
