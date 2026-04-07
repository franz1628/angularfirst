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
  @Output() save = new EventEmitter<{ data: Partial<Brand>, logoFile?: File }>();
  @Output() cancel = new EventEmitter<void>();

  brandForm: FormGroup;
  previewUrl: string | null = null;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder) {
    this.brandForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      logo: [''], // Will hold the current URL
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
      this.previewUrl = this.brand.logo || null;
    } else if (!this.brand) {
      this.brandForm.reset({ state: 1 });
      this.previewUrl = null;
      this.selectedFile = null;
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      if (!['image/jpeg', 'image/png', 'image/svg+xml'].includes(file.type)) {
        alert('Invalid file format. Please upload JPG, PNG or SVG.');
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        alert('File size too large. Max 2MB.');
        return;
      }

      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (this.brandForm.valid) {
      this.save.emit({
        data: this.brandForm.value,
        logoFile: this.selectedFile || undefined
      });
    } else {
      this.brandForm.markAllAsTouched();
    }
  }

  get f() { return this.brandForm.controls; }
}
