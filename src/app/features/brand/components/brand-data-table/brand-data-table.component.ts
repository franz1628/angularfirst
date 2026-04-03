import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Brand } from '../../models/brand.model';

@Component({
  selector: 'app-brand-data-table',
  templateUrl: './brand-data-table.component.html',
  styleUrls: ['./brand-data-table.component.css']
})
export class BrandDataTableComponent {
  @Input() brands: Brand[] | null = [];
  @Input() loading = false;
  
  @Output() edit = new EventEmitter<Brand>();
  @Output() delete = new EventEmitter<number>();

  trackByBrandId(index: number, brand: Brand): number {
    return brand.id;
  }
}
