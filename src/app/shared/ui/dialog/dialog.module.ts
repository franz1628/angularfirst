import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { DialogService } from './dialog.service';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    DialogComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DialogComponent,
    ConfirmDialogComponent
  ],
  providers: [
    DialogService
  ]
})
export class DialogModule { }
