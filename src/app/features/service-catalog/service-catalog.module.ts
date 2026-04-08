import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceCatalogRoutingModule } from './service-catalog-routing.module';

import { ServiceCatalogDataTableComponent } from './components/service-catalog-data-table/service-catalog-data-table.component';
import { ServiceCatalogRegistryComponent } from './components/service-catalog-registry/service-catalog-registry.component';
import { ServiceCatalogOverviewComponent } from './pages/service-catalog-overview/service-catalog-overview.component';
import { ServiceCatalogEditorPageComponent } from './pages/service-catalog-editor-page/service-catalog-editor-page.component';
import { ServiceCatalogImagePipe } from './pipes/service-catalog-image.pipe';

@NgModule({
  declarations: [
    ServiceCatalogDataTableComponent,
    ServiceCatalogRegistryComponent,
    ServiceCatalogOverviewComponent,
    ServiceCatalogEditorPageComponent,
    ServiceCatalogImagePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ServiceCatalogRoutingModule
  ],
  exports: [
    ServiceCatalogOverviewComponent,
    ServiceCatalogEditorPageComponent,
    ServiceCatalogImagePipe
  ]
})
export class ServiceCatalogModule { }
