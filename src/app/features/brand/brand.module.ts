import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrandRoutingModule } from './brand-routing.module';

import { BrandDataTableComponent } from './components/brand-data-table/brand-data-table.component';
import { BrandRegistryComponent } from './components/brand-registry/brand-registry.component';
import { BrandOverviewComponent } from './pages/brand-overview/brand-overview.component';
import { BrandEditorPageComponent } from './pages/brand-editor-page/brand-editor-page.component';
import { BrandImagePipe } from './pipes/brand-image.pipe';

@NgModule({
  declarations: [
    BrandDataTableComponent,
    BrandRegistryComponent,
    BrandOverviewComponent,
    BrandEditorPageComponent,
    BrandImagePipe
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    BrandRoutingModule
  ],
  exports: [
    BrandOverviewComponent,
    BrandEditorPageComponent,
    BrandImagePipe
  ]
})
export class BrandModule { }
