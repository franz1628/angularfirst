import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DocumentType } from '../../models/document-type.model';
import { DocumentTypeService } from '../../services/document-type.service';

@Component({
  selector: 'app-document-type-overview',
  templateUrl: './document-type-overview.component.html',
  styleUrls: ['./document-type-overview.component.css']
})
export class DocumentTypeOverviewComponent implements OnInit {
  documentTypes$: Observable<DocumentType[]>;
  loading = false;

  constructor(
    private docTypeService: DocumentTypeService,
    private router: Router
  ) {
    this.documentTypes$ = this.docTypeService.documentTypes$;
  }

  ngOnInit(): void {
    this.docTypeService.refreshDocumentTypeList();
  }

  onAdd(): void {
    this.router.navigate(['/document-type/add']);
  }

  onEdit(docType: DocumentType): void {
    this.router.navigate(['/document-type', docType.id]);
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to remove this document classification?')) {
      this.docTypeService.delete(id).subscribe({
        error: (err) => console.error('Delete failed', err)
      });
    }
  }
}
