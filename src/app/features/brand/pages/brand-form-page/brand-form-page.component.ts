import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from '../../models/brand.model';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brand-form-page',
  templateUrl: './brand-form-page.component.html'
})
export class BrandFormPageComponent implements OnInit {

  public brand: Brand = {
    id: 0,
    name: '',
    description: '',
    logo: '',
    state: 1,
    created_at: '',
    updated_at: ''
  };

  public isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.brandService.getById(Number(id)).subscribe({
        next: (found) => {
          this.brand = { ...found };
        },
        error: () => {
          this.router.navigate(['/brand']);
        }
      });
    }
  }

  onSave(brandData: Partial<Brand>): void {
    const action = this.isEdit 
      ? this.brandService.update(this.brand.id, brandData)
      : this.brandService.add(brandData);

    action.subscribe(() => {
      this.router.navigate(['/brand']);
    });
  }

  onCancel(): void {
    this.router.navigate(['/brand']);
  }
}
