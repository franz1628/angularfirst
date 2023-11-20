import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandPagesComponent } from './brand/pages/brand-pages/brand-pages.component';
import { DesignPageComponent } from './design/pages/design-page/design-page.component';

const routes: Routes = [
  {
    path: 'brand',
    component: BrandPagesComponent
  },
  {
    path: 'design',
    component: DesignPageComponent
  },
  {
    path: '**',
    component:BrandPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
