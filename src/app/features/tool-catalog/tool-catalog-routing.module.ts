import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolCatalogOverviewComponent } from './pages/tool-catalog-overview/tool-catalog-overview.component';
import { ToolCatalogEditorPageComponent } from './pages/tool-catalog-editor-page/tool-catalog-editor-page.component';

const routes: Routes = [
  {
    path: '',
    component: ToolCatalogOverviewComponent
  },
  {
    path: 'add',
    component: ToolCatalogEditorPageComponent
  },
  {
    path: ':id',
    component: ToolCatalogEditorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolCatalogRoutingModule { }
