import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PersonOverviewComponent } from './pages/person-overview/person-overview.component';
import { PersonEditorPageComponent } from './pages/person-editor-page/person-editor-page.component';
import { PersonDataTableComponent } from './components/person-data-table/person-data-table.component';
import { PersonRegistryComponent } from './components/person-registry/person-registry.component';

@NgModule({
  declarations: [
    PersonOverviewComponent,
    PersonEditorPageComponent,
    PersonDataTableComponent,
    PersonRegistryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    PersonOverviewComponent,
    PersonEditorPageComponent
  ]
})
export class PersonModule { }
