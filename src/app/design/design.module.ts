import { NgModule } from "@angular/core";
import { DesignFormComponent } from "./components/design-form/design-form.component";
import { DesignListComponent } from "./components/design-list/design-list.component";
import { DesignPageComponent } from "./pages/design-page/design-page.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[
        DesignFormComponent,
        DesignListComponent,
        DesignPageComponent
    ],imports:[
        FormsModule,
        CommonModule,
        BrowserModule
    ],exports:[
        DesignFormComponent,
        DesignListComponent,
        DesignPageComponent
    ]
})

export class DesignModule{}