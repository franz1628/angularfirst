import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brand } from '../../models/brand.model';

@Component({
  selector: 'app-brand-registry',
  templateUrl: './brand-registry.component.html',
  styleUrls: ['./brand-registry.component.css']
})
export class BrandRegistryComponent implements OnChanges {
  @Input() brand: Brand | null = null;
  @Output() save = new EventEmitter<Partial<Brand>>();
  @Output() cancel = new EventEmitter<void>();

  brandForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.brandForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      logo: ['', [Validators.pattern('https?://.*')]],
      state: [1, Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['brand'] && this.brand) {
      this.brandForm.patchValue({
        name: this.brand.name,
        description: this.brand.description,
        logo: this.brand.logo,
        state: this.brand.state
      });
    } else if (!this.brand) {
      this.brandForm.reset({ state: 1 });
    }
  }

  onSubmit(): void {
    if (this.brandForm.valid) {
      this.save.emit(this.brandForm.value);
    } else {
      this.brandForm.markAllAsTouched();
    }
  }

  get f() { return this.brandForm.controls; }
}
