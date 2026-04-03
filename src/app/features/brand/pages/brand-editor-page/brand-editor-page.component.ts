import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from '../../models/brand.model';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brand-editor-page',
  templateUrl: './brand-editor-page.component.html',
  styleUrls: ['./brand-editor-page.component.css']
})
export class BrandEditorPageComponent implements OnInit {
  selectedBrand: Brand | null = null;
  loading = false;
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.loading = true;
      this.brandService.getById(Number(id)).subscribe({
        next: (brand) => {
          this.selectedBrand = brand;
          this.loading = false;
        },
        error: () => {
          this.router.navigate(['/brand']);
        }
      });
    }
  }

  onSave(brandData: Partial<Brand>): void {
    this.loading = true;
    const action = this.isEdit && this.selectedBrand
      ? this.brandService.update(this.selectedBrand.id, brandData)
      : this.brandService.add(brandData);

    action.subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/brand']);
      },
      error: (err) => {
        this.loading = false;
        console.error('Operation failed', err);
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/brand']);
  }
}
