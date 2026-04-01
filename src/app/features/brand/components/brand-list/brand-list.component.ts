import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Brand } from '../../models/brand.model';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html'
})
export class BrandListComponent {
  @Input() public brands: Brand[] = [];
  @Output() public delete = new EventEmitter<number>();
  @Output() public edit = new EventEmitter<number>();

  onDelete(id: number): void {
    this.delete.emit(id);
  }

  onEdit(id: number): void {
    this.edit.emit(id);
  }
}
