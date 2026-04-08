import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceCatalog } from '../../models/service-catalog.model';
import { ServiceCatalogService } from '../../services/service-catalog.service';

@Component({
  selector: 'app-service-catalog-registry',
  templateUrl: './service-catalog-registry.component.html',
  styleUrls: ['./service-catalog-registry.component.css']
})
export class ServiceCatalogRegistryComponent implements OnChanges {
  @Input() service: ServiceCatalog | null = null;
  @Output() save = new EventEmitter<Partial<ServiceCatalog>>();
  @Output() cancel = new EventEmitter<void>();

  serviceForm: FormGroup;
  selectedFile: File | null = null;
  previewUrl: string | null = null;

  constructor(
    private fb: FormBuilder,
    private serviceCatalogService: ServiceCatalogService
  ) {
    this.serviceForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(0)]],
      duration_minutes: [60, [Validators.required, Validators.min(1)]],
      photo: [''],
      state: [1, [Validators.required]]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['service'] && this.service) {
      this.serviceForm.patchValue(this.service);
      this.previewUrl = this.service.photo;
    }
  }

  get f() { return this.serviceForm.controls; }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (this.serviceForm.invalid) return;

    if (this.selectedFile) {
      this.serviceCatalogService.uploadPhoto(this.selectedFile).subscribe({
        next: (res) => {
          this.serviceForm.patchValue({ photo: res.logoUrl });
          this.emitSave();
        },
        error: (err) => console.error('Upload failed', err)
      });
    } else {
      this.emitSave();
    }
  }

  private emitSave(): void {
    this.save.emit(this.serviceForm.value);
  }
}
