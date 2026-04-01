import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandFormComponent } from './components/brand-form/brand-form.component';
import { BrandListPageComponent } from './pages/brand-list-page/brand-list-page.component';
import { BrandFormPageComponent } from './pages/brand-form-page/brand-form-page.component';

@NgModule({
  declarations: [
    BrandListComponent,
    BrandFormComponent,
    BrandListPageComponent,
    BrandFormPageComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule
  ],
  exports: [
    BrandListPageComponent,
    BrandFormPageComponent
  ]
})
export class BrandModule { }
