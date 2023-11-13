import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandFormComponent } from './components/brand-form/brand-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrandPagesComponent } from './pages/brand-pages/brand-pages.component';



@NgModule({
  declarations: [BrandListComponent,BrandPagesComponent, BrandFormComponent, BrandListComponent],
  imports: [
    CommonModule,BrowserModule
  ],
  exports:[BrandPagesComponent, BrandFormComponent, BrandListComponent]
})
export class BrandModule { }
