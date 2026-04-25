import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Brand } from '../../models/brand.model';
import { BrandService } from '../../services/brand.service';
import { DialogService } from '../../../../shared/ui/dialog/dialog.service';
import { DialogComponent } from '../../../../shared/ui/dialog/dialog.component';

@Component({
  selector: 'app-brand-overview',
  templateUrl: './brand-overview.component.html',
  styleUrls: ['./brand-overview.component.css']
})
export class BrandOverviewComponent implements OnInit {
  brands$: Observable<Brand[]> = this.brandService.brands$;
  loading = false;

  constructor(
    private brandService: BrandService,
    private router: Router,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.brandService.refreshBrandList();
  }

  onAdd(): void {
    this.router.navigate(['/brand/add']);
  }

  onEdit(brand: Brand): void {
    this.router.navigate(['/brand', brand.id]);
  }

  onDelete(id: number): void {
    this.dialogService.confirm(
      'Are you sure you want to de-list this manufacturer? This action is permanent.',
      'Confirm',
      () => this.brandService.delete(id)
    );
  }
}
