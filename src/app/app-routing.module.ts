import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignListPageComponent } from './features/design/pages/design-list-page/design-list-page.component';
import { DesignFormPageComponent } from './features/design/pages/design-form-page/design-form-page.component';
import { PersonListPageComponent } from './features/person/pages/person-list-page/person-list-page.component';
import { PersonFormPageComponent } from './features/person/pages/person-form-page/person-form-page.component';
import { AuthGuard } from './core/guards/auth.guard';
const routes: Routes = [
  {
    path: 'brand',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/brand/brand.module').then(m => m.BrandModule)
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
    path: 'person',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: PersonListPageComponent },
      { path: 'add', component: PersonFormPageComponent },
      { path: ':id', component: PersonFormPageComponent }
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
