import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  @Input() message: string = '';
  @Input() confirmText: string = 'Confirm';
  @Input() cancelText: string = 'Cancel';
  @Input() action: any;
  @Input() showCancelButton: boolean = true;
  @Input() showConfirmButton: boolean = true;

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    // If context was passed via ngComponentOutlet, we might need to handle it here
    // but usually inputs are better. However, DialogService passes context.
  }

  onConfirm(): void {
    if (this.action && typeof this.action === 'function') {
      const result = this.action();
      if (result instanceof (window as any).Observable || (result && result.subscribe)) {
        result.subscribe(() => {
          this.dialogService.close();
        });
      } else {
        this.dialogService.close();
      }
    } else {
      this.dialogService.close();
    }
  }

  onCancel(): void {
    this.dialogService.close();
  }
}
