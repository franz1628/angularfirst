import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DocumentTypeRoutingModule } from './document-type-routing.module';

import { DocumentTypeDataTableComponent } from './components/document-type-data-table/document-type-data-table.component';
import { DocumentTypeRegistryComponent } from './components/document-type-registry/document-type-registry.component';
import { DocumentTypeOverviewComponent } from './pages/document-type-overview/document-type-overview.component';
import { DocumentTypeEditorPageComponent } from './pages/document-type-editor-page/document-type-editor-page.component';

@NgModule({
  declarations: [
    DocumentTypeDataTableComponent,
    DocumentTypeRegistryComponent,
    DocumentTypeOverviewComponent,
    DocumentTypeEditorPageComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    DocumentTypeRoutingModule
  ],
  exports: [
    DocumentTypeOverviewComponent,
    DocumentTypeEditorPageComponent
  ]
})
export class DocumentTypeModule { }
