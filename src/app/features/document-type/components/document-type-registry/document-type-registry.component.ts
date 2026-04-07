import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentType } from '../../models/document-type.model';

@Component({
  selector: 'app-document-type-registry',
  templateUrl: './document-type-registry.component.html',
  styleUrls: ['./document-type-registry.component.css']
})
export class DocumentTypeRegistryComponent implements OnChanges {
  @Input() documentType: DocumentType | null = null;
  @Output() save = new EventEmitter<Partial<DocumentType>>();
  @Output() cancel = new EventEmitter<void>();

  docTypeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.docTypeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', Validators.maxLength(255)],
      state: [1, Validators.required]
    });
  }

  ngOnChanges(): void {
    if (this.documentType) {
      this.docTypeForm.patchValue({
        name: this.documentType.name,
        description: this.documentType.description,
        state: this.documentType.state
      });
    } else {
      this.docTypeForm.reset({ state: 1 });
    }
  }

  get f() { return this.docTypeForm.controls; }

  onSubmit(): void {
    if (this.docTypeForm.valid) {
      this.save.emit(this.docTypeForm.value);
    } else {
      this.docTypeForm.markAllAsTouched();
    }
  }
}
