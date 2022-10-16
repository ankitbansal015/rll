import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BillingComponent } from './billing/billing.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ChecktqComponent } from './checktq/checktq.component';

@NgModule({
  declarations: [
    AppComponent,
    BillingComponent,
    CheckoutComponent,
    ChecktqComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
