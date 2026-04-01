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
    description: '',
    created_at: new Date(),
    updated_at: new Date()
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
      const found = this.brandService.getById(Number(id));
      if (found) {
        this.brand = { ...found };
      } else {
        this.router.navigate(['/brand']);
      }
    }
  }

  onSave(brand: Brand): void {
    if (this.isEdit) {
      this.brandService.update(this.brand.id, brand);
    } else {
      this.brandService.add(brand);
    }
    this.router.navigate(['/brand']);
  }

  onCancel(): void {
    this.router.navigate(['/brand']);
  }
}
