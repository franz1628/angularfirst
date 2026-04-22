import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToolCatalog } from '../../models/tool-catalog.model';
import { ToolCatalogService } from '../../services/tool-catalog.service';

@Component({
  selector: 'app-tool-catalog-registry',
  templateUrl: './tool-catalog-registry.component.html',
  styleUrls: ['./tool-catalog-registry.component.css']
})
export class ToolCatalogRegistryComponent implements OnChanges {
  @Input() tool: ToolCatalog | null = null;
  @Output() save = new EventEmitter<Partial<ToolCatalog>>();
  @Output() cancel = new EventEmitter<void>();

  toolForm: FormGroup;
  selectedFile: File | null = null;
  previewUrl: string | null = null;

  constructor(
    private fb: FormBuilder,
    private toolCatalogService: ToolCatalogService
  ) {
    this.toolForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      photo: [''],
      state: [1, [Validators.required]]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tool'] && this.tool) {
      this.toolForm.patchValue(this.tool);
      this.previewUrl = this.tool.photo ?? null;
    }
  }

  get f() { return this.toolForm.controls; }

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
    if (this.toolForm.invalid) return;

    if (this.selectedFile) {
      this.toolCatalogService.uploadPhoto(this.selectedFile).subscribe({
        next: (res) => {
          this.toolForm.patchValue({ photo: res.logoUrl });
          this.emitSave();
        },
        error: (err) => console.error('Upload failed', err)
      });
    } else {
      this.emitSave();
    }
  }

  private emitSave(): void {
    this.save.emit(this.toolForm.value);
  }
}
