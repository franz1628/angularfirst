import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand.model';
import { BrandService } from '../../services/brand.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-brand-list-page',
  templateUrl: './brand-list-page.component.html'
})
export class BrandListPageComponent implements OnInit {
  brands$!: Observable<Brand[]>;

  constructor(private brandService: BrandService, private router: Router) {}

  ngOnInit(): void {
    this.brands$ = this.brandService.getAll();
  }

  onAdd(): void {
    this.router.navigate(['/brand/add']);
  }

  onEdit(id: number): void {
    this.router.navigate(['/brand', id]);
  }

  onDelete(id: number): void {
    this.brandService.delete(id).subscribe(() => {
      this.brands$ = this.brandService.getAll();
    });
  }
}
