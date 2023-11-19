import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrandListComponent } from './brand/components/brand-list/brand-list.component';
import { BrandModule } from './brand/brand.module';
import { DesignListComponent } from './design/components/design-list/design-list.component';
import { DesignFormComponent } from './design/components/design-form/design-form.component';
import { DesignPageComponent } from './design/pages/design-page/design-page.component';
import { DesignModule } from './design/design.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrandModule,
    DesignModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
