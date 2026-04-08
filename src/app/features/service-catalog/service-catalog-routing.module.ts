import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceCatalogOverviewComponent } from './pages/service-catalog-overview/service-catalog-overview.component';
import { ServiceCatalogEditorPageComponent } from './pages/service-catalog-editor-page/service-catalog-editor-page.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceCatalogOverviewComponent
  },
  {
    path: 'add',
    component: ServiceCatalogEditorPageComponent
  },
  {
    path: ':id',
    component: ServiceCatalogEditorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceCatalogRoutingModule { }
