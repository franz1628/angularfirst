import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandFormComponent } from './components/brand-form/brand-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrandPagesComponent } from './pages/brand-pages/brand-pages.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BrandPagesComponent,
    BrandFormComponent,
    BrandListComponent],
  imports: [
    CommonModule, 
    BrowserModule,
    FormsModule
  ],
  exports: [
    BrandPagesComponent,
    BrandFormComponent,
    BrandListComponent
  ]
})
export class BrandModule { }
