import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DocumentType } from '../../models/document-type.model';

@Component({
  selector: 'app-document-type-data-table',
  templateUrl: './document-type-data-table.component.html',
  styleUrls: ['./document-type-data-table.component.css']
})
export class DocumentTypeDataTableComponent {
  @Input() documentTypes: DocumentType[] | null = [];
  @Input() loading = false;
  
  @Output() edit = new EventEmitter<DocumentType>();
  @Output() delete = new EventEmitter<number>();

  trackById(index: number, item: DocumentType): number {
    return item.id;
  }
}
