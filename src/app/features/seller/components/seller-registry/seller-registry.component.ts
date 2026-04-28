import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Seller } from '../../models/seller.model';
import { DocumentType } from '../../../document-type/models/document-type.model';
import { DocumentTypeService } from '../../../document-type/services/document-type.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-seller-registry',
  templateUrl: './seller-registry.component.html',
  styleUrl: './seller-registry.component.css'
})
export class SellerRegistryComponent implements OnChanges, OnInit {
  @Input() seller: Seller | null = null;
  @Output() save = new EventEmitter<Partial<Seller>>();
  @Output() cancel = new EventEmitter<void>();

  sellerForm: FormGroup;
  documentTypes: DocumentType[] = [];

  constructor(
    private fb: FormBuilder,
    private docTypeService: DocumentTypeService
  ) {
    this.sellerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      second_last_name: [''],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      id_document_type: [null, Validators.required],
      number_document: ['', [Validators.required, Validators.minLength(5)]],
      phone: [''],
      photo: [''],
      birth_date: [''],
      address: [''],
      state: [1, Validators.required]
    });
  }

  ngOnInit(): void {
    this.docTypeService.documentTypes$.pipe(first((types: DocumentType[]) => types.length > 0)).subscribe(types => {
      this.documentTypes = types;
    });
  }

  ngOnChanges(): void {
    if (this.seller) {
      this.sellerForm.patchValue({
        ...this.seller,
        password: ''
      });
      this.sellerForm.get('password')?.setValidators([]);
    } else {
      this.sellerForm.reset({ state: 1 });
      this.sellerForm.get('password')?.setValidators([Validators.required, Validators.minLength(6)]);
    }
    this.sellerForm.get('password')?.updateValueAndValidity();
  }

  get f() { return this.sellerForm.controls; }

  onSubmit(): void {
    if (this.sellerForm.valid) {
      const rawValue = this.sellerForm.value;
      if (rawValue.id_document_type) rawValue.id_document_type = Number(rawValue.id_document_type);
      
      this.save.emit(rawValue);
    } else {
      this.sellerForm.markAllAsTouched();
    }
  }
}
