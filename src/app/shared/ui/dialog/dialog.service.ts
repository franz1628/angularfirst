import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

export interface DialogData {
  title: string;
  component?: Type<any>;
  template?: any;
  context?: any;
  showCloseButton?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialogState = new BehaviorSubject<DialogData | null>(null);

  public dialogState$ = this.dialogState.asObservable();

  open(data: DialogData): void {
    this.dialogState.next(data);
  }

  confirm(message: string, title: string = 'Confirm', action: any) {
    this.dialogState.next({
      title: title,
      component: ConfirmDialogComponent,
      context: {
        message: message,
        action: action,
        confirmText: 'Yes, Delete',
        cancelText: 'Cancel',
        showConfirmButton: true,
        showCancelButton: true
      },
    });
  }

  alert(message: string, title: string = 'Alert'): void {
    this.open({
      title: title,
      component: ConfirmDialogComponent,
      context: {
        message: message,
        confirmText: 'OK',
        showCancelButton: false
      }
    });
  }

  close(): void {
    this.dialogState.next(null);
  }
}
