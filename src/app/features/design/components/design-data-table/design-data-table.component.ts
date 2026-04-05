import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Design } from '../../models/design.model';

@Component({
  selector: 'app-design-data-table',
  templateUrl: './design-data-table.component.html'
})
export class DesignDataTableComponent {
  @Input() public designs: Design[] = [];
  @Output() public delete = new EventEmitter<number>();
  @Output() public edit = new EventEmitter<number>();

  onDelete(id: number): void {
    this.delete.emit(id);
  }

  onEdit(id: number): void {
    this.edit.emit(id);
  }
}
