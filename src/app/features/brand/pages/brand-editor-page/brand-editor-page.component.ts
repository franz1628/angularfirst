import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
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

  onSave(event: { data: Partial<Brand>, logoFile?: File }): void {
    const { data, logoFile } = event;
    this.loading = true;

    // 1. Handle Logo Upload if exists
    const upload$ = logoFile 
      ? this.brandService.uploadLogo(logoFile).pipe(switchMap(res => of(res.logoUrl)))
      : of(data.logo);

    // 2. Cascade to Save
    upload$.pipe(
      switchMap(logoUrl => {
        const finalData = { ...data, logo: logoUrl };
        return this.isEdit && this.selectedBrand
          ? this.brandService.update(this.selectedBrand.id, finalData)
          : this.brandService.add(finalData);
      })
    ).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/brand']);
      },
      error: (err) => {
        this.loading = false;
        console.error('Operation failed', err);
        alert('Failed to save brand. Please check if the backend upload endpoint is ready.');
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/brand']);
  }
}
