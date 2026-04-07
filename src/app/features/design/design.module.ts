import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { DesignRegistryComponent } from "./components/design-registry/design-registry.component";
import { DesignDataTableComponent } from "./components/design-data-table/design-data-table.component";
import { DesignOverviewComponent } from "./pages/design-overview/design-overview.component";
import { DesignEditorPageComponent } from "./pages/design-editor-page/design-editor-page.component";

@NgModule({
  declarations: [
    DesignRegistryComponent,
    DesignDataTableComponent,
    DesignOverviewComponent,
    DesignEditorPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    DesignOverviewComponent,
    DesignEditorPageComponent
  ]
})
export class DesignModule { }
