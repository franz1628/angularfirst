import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PersonListPageComponent } from './pages/person-list-page/person-list-page.component';
import { PersonFormPageComponent } from './pages/person-form-page/person-form-page.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonFormComponent } from './components/person-form/person-form.component';

@NgModule({
  declarations: [
    PersonListPageComponent,
    PersonFormPageComponent,
    PersonListComponent,
    PersonFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    PersonListPageComponent,
    PersonFormPageComponent
  ]
})
export class PersonModule { }
