import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentType } from '../../models/document-type.model';
import { DocumentTypeService } from '../../services/document-type.service';

@Component({
  selector: 'app-document-type-editor-page',
  templateUrl: './document-type-editor-page.component.html',
  styleUrls: ['./document-type-editor-page.component.css']
})
export class DocumentTypeEditorPageComponent implements OnInit {
  isEdit = false;
  loading = false;
  selectedDocType: DocumentType | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private docTypeService: DocumentTypeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'add') {
      this.isEdit = true;
      this.loadDocType(Number(id));
    }
  }

  loadDocType(id: number): void {
    this.loading = true;
    this.docTypeService.getById(id).subscribe({
      next: (docType) => {
        this.selectedDocType = docType;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load document type', err);
        this.loading = false;
        this.router.navigate(['/document-type']);
      }
    });
  }

  onSave(docTypeData: Partial<DocumentType>): void {
    this.loading = true;
    const action = this.isEdit && this.selectedDocType
      ? this.docTypeService.update(this.selectedDocType.id, docTypeData)
      : this.docTypeService.add(docTypeData);

    action.subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/document-type']);
      },
      error: (err) => {
        this.loading = false;
        console.error('Operation failed', err);
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/document-type']);
  }
}
