import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mecanic } from '../../models/mecanic.model';
import { DocumentType } from '../../../document-type/models/document-type.model';
import { DocumentTypeService } from '../../../document-type/services/document-type.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-mecanic-registry',
  templateUrl: './mecanic-registry.component.html',
  styleUrls: ['./mecanic-registry.component.css']
})
export class MecanicRegistryComponent implements OnChanges, OnInit {
  @Input() mecanic: Mecanic | null = null;
  @Output() save = new EventEmitter<Partial<Mecanic>>();
  @Output() cancel = new EventEmitter<void>();

  mecanicForm: FormGroup;
  documentTypes: DocumentType[] = [];

  constructor(
    private fb: FormBuilder,
    private docTypeService: DocumentTypeService
  ) {
    this.mecanicForm = this.fb.group({
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
      experience_years: [0],
      certifications: [''],
      state: [1, Validators.required]
    });
  }

  ngOnInit(): void {
    this.docTypeService.documentTypes$.pipe(first((types: DocumentType[]) => types.length > 0)).subscribe(types => {
      this.documentTypes = types;
    });
  }

  ngOnChanges(): void {
    if (this.mecanic) {
      this.mecanicForm.patchValue({
        ...this.mecanic,
        password: '' // Don't show password even if it exists
      });
      // Ensure password is not required on edit if not provided
      this.mecanicForm.get('password')?.setValidators([]);
    } else {
      this.mecanicForm.reset({ state: 1, experience_years: 0 });
      this.mecanicForm.get('password')?.setValidators([Validators.required, Validators.minLength(6)]);
    }
    this.mecanicForm.get('password')?.updateValueAndValidity();
  }

  get f() { return this.mecanicForm.controls; }

  onSubmit(): void {
    if (this.mecanicForm.valid) {
      const rawValue = this.mecanicForm.value;
      // Convert numeric fields from string if necessary (though Reactive Forms usually handle them if types match)
      if (rawValue.experience_years) rawValue.experience_years = Number(rawValue.experience_years);
      if (rawValue.id_document_type) rawValue.id_document_type = Number(rawValue.id_document_type);
      
      this.save.emit(rawValue);
    } else {
      this.mecanicForm.markAllAsTouched();
    }
  }
}
