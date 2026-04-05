import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignOverviewComponent } from './features/design/pages/design-overview/design-overview.component';
import { DesignEditorPageComponent } from './features/design/pages/design-editor-page/design-editor-page.component';
import { PersonOverviewComponent } from './features/person/pages/person-overview/person-overview.component';
import { PersonEditorPageComponent } from './features/person/pages/person-editor-page/person-editor-page.component';
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
      { path: '', component: DesignOverviewComponent },
      { path: 'add', component: DesignEditorPageComponent },
      { path: ':id', component: DesignEditorPageComponent }
    ]
  },
  {
    path: 'person',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: PersonOverviewComponent },
      { path: 'add', component: PersonEditorPageComponent },
      { path: ':id', component: PersonEditorPageComponent }
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
