import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CommonModule } from '@angular/common';
import { BrandListComponent } from './brand/components/brand-list/brand-list.component';
import { BrandModule } from './brand/brand.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrandModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
