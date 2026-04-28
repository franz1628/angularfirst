import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerOverviewComponent } from './pages/seller-overview/seller-overview.component';
import { SellerEditorPageComponent } from './pages/seller-editor-page/seller-editor-page.component';

const routes: Routes = [
  { path: '', component: SellerOverviewComponent },
  { path: 'new', component: SellerEditorPageComponent },
  { path: 'edit/:id', component: SellerEditorPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
