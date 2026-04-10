import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MecanicRoutingModule } from './mecanic-routing.module';

import { MecanicDataTableComponent } from './components/mecanic-data-table/mecanic-data-table.component';
import { MecanicRegistryComponent } from './components/mecanic-registry/mecanic-registry.component';
import { MecanicOverviewComponent } from './pages/mecanic-overview/mecanic-overview.component';
import { MecanicEditorPageComponent } from './pages/mecanic-editor-page/mecanic-editor-page.component';

@NgModule({
  declarations: [
    MecanicDataTableComponent,
    MecanicRegistryComponent,
    MecanicOverviewComponent,
    MecanicEditorPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MecanicRoutingModule
  ],
  exports: [
    MecanicOverviewComponent,
    MecanicEditorPageComponent
  ]
})
export class MecanicModule { }
