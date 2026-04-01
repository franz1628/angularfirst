import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand.model';
import { BrandService } from '../../services/brand.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-list-page',
  templateUrl: './brand-list-page.component.html'
})
export class BrandListPageComponent implements OnInit {

  constructor(public brandService: BrandService, private router: Router) {}

  ngOnInit(): void {}

  get brands(): Brand[] {
    return this.brandService.brands;
  }

  onAdd(): void {
    this.router.navigate(['/brand/add']);
  }

  onEdit(id: number): void {
    this.router.navigate(['/brand', id]);
  }

  onDelete(id: number): void {
    this.brandService.delete(id);
  }
}
