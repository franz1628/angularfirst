import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandListPageComponent } from './features/brand/pages/brand-list-page/brand-list-page.component';
import { BrandFormPageComponent } from './features/brand/pages/brand-form-page/brand-form-page.component';
import { DesignListPageComponent } from './features/design/pages/design-list-page/design-list-page.component';
import { DesignFormPageComponent } from './features/design/pages/design-form-page/design-form-page.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'brand',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: BrandListPageComponent },
      { path: 'add', component: BrandFormPageComponent },
      { path: ':id', component: BrandFormPageComponent }
    ]
  },
  {
    path: 'design',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DesignListPageComponent },
      { path: 'add', component: DesignFormPageComponent },
      { path: ':id', component: DesignFormPageComponent }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    redirectTo: 'brand',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'brand'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
