import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MecanicOverviewComponent } from './pages/mecanic-overview/mecanic-overview.component';
import { MecanicEditorPageComponent } from './pages/mecanic-editor-page/mecanic-editor-page.component';

const routes: Routes = [
  {
    path: '',
    component: MecanicOverviewComponent
  },
  {
    path: 'new',
    component: MecanicEditorPageComponent
  },
  {
    path: 'edit/:id',
    component: MecanicEditorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MecanicRoutingModule { }
