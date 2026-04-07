import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentTypeOverviewComponent } from './pages/document-type-overview/document-type-overview.component';
import { DocumentTypeEditorPageComponent } from './pages/document-type-editor-page/document-type-editor-page.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentTypeOverviewComponent
  },
  {
    path: 'add',
    component: DocumentTypeEditorPageComponent
  },
  {
    path: ':id',
    component: DocumentTypeEditorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentTypeRoutingModule { }
