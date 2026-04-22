import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolCatalogRoutingModule } from './tool-catalog-routing.module';

import { ToolCatalogOverviewComponent } from './pages/tool-catalog-overview/tool-catalog-overview.component';
import { ToolCatalogEditorPageComponent } from './pages/tool-catalog-editor-page/tool-catalog-editor-page.component';
import { ToolCatalogDataTableComponent } from './components/tool-catalog-data-table/tool-catalog-data-table.component';
import { ToolCatalogRegistryComponent } from './components/tool-catalog-registry/tool-catalog-registry.component';

@NgModule({
  declarations: [
    ToolCatalogOverviewComponent,
    ToolCatalogEditorPageComponent,
    ToolCatalogDataTableComponent,
    ToolCatalogRegistryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToolCatalogRoutingModule
  ]
})
export class ToolCatalogModule { }
