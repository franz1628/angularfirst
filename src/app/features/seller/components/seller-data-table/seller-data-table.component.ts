import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Seller } from '../../models/seller.model';

@Component({
  selector: 'app-seller-data-table',
  templateUrl: './seller-data-table.component.html',
  styleUrl: './seller-data-table.component.css'
})
export class SellerDataTableComponent {
  @Input() sellers: Seller[] = [];
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  onEdit(id: number): void {
    this.edit.emit(id);
  }

  onDelete(id: number): void {
    this.delete.emit(id);
  }
}
