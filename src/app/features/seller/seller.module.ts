import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerDataTableComponent } from './components/seller-data-table/seller-data-table.component';
import { SellerRegistryComponent } from './components/seller-registry/seller-registry.component';
import { SellerOverviewComponent } from './pages/seller-overview/seller-overview.component';
import { SellerEditorPageComponent } from './pages/seller-editor-page/seller-editor-page.component';


@NgModule({
  declarations: [
    SellerDataTableComponent,
    SellerRegistryComponent,
    SellerOverviewComponent,
    SellerEditorPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SellerRoutingModule
  ]
})
export class SellerModule { }
