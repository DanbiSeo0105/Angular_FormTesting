import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { OfferFormModule } from './offer-form/offer-form.module'

 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    OfferFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
