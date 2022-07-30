import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { CustomerComponent } from './components/customer/customer.component';
import { ItemComponent } from './components/item/item.component';
import { SaveCustomerComponent } from './components/customer/inner-items/save-customer/save-customer.component';
import { UpdateCustomerComponent } from './components/customer/inner-items/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './components/customer/inner-items/delete-customer/delete-customer.component';
import { GetCustomerComponent } from './components/customer/inner-items/get-customer/get-customer.component';
import { GetAllCustomerComponent } from './components/customer/inner-items/get-all-customer/get-all-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ItemComponent,
    SaveCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    GetCustomerComponent,
    GetAllCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
