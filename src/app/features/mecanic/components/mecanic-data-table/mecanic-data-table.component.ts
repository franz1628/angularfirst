import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mecanic } from '../../models/mecanic.model';

@Component({
  selector: 'app-mecanic-data-table',
  templateUrl: './mecanic-data-table.component.html',
  styleUrls: ['./mecanic-data-table.component.css']
})
export class MecanicDataTableComponent {
  @Input() mechanics: Mecanic[] = [];
  @Input() loading: boolean = false;
  
  @Output() edit = new EventEmitter<Mecanic>();
  @Output() delete = new EventEmitter<number>();

  trackById(index: number, item: Mecanic): number {
    return item.id;
  }
}
