import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-data-table',
  templateUrl: './person-data-table.component.html',
  styleUrls: ['./person-data-table.component.css']
})
export class PersonDataTableComponent {
  @Input() persons: Person[] = [];
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  onEdit(id: number): void {
    this.edit.emit(id);
  }

  onDelete(id: number): void {
    this.delete.emit(id);
  }
}
