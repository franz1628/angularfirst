import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandOverviewComponent } from './pages/brand-overview/brand-overview.component';
import { BrandEditorPageComponent } from './pages/brand-editor-page/brand-editor-page.component';

const routes: Routes = [
  {
    path: '',
    component: BrandOverviewComponent
  },
  {
    path: 'add',
    component: BrandEditorPageComponent
  },
  {
    path: ':id',
    component: BrandEditorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandRoutingModule { }
