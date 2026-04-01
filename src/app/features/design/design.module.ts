import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { DesignFormComponent } from "./components/design-form/design-form.component";
import { DesignListComponent } from "./components/design-list/design-list.component";
import { DesignListPageComponent } from "./pages/design-list-page/design-list-page.component";
import { DesignFormPageComponent } from "./pages/design-form-page/design-form-page.component";

@NgModule({
  declarations: [
    DesignFormComponent,
    DesignListComponent,
    DesignListPageComponent,
    DesignFormPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    DesignListPageComponent,
    DesignFormPageComponent
  ]
})
export class DesignModule { }