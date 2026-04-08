import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceCatalog } from '../../models/service-catalog.model';
import { ServiceCatalogService } from '../../services/service-catalog.service';

@Component({
  selector: 'app-service-catalog-overview',
  templateUrl: './service-catalog-overview.component.html',
  styleUrls: ['./service-catalog-overview.component.css']
})
export class ServiceCatalogOverviewComponent implements OnInit {
  services$: Observable<ServiceCatalog[]>;
  loading = false;

  constructor(
    private serviceCatalogService: ServiceCatalogService,
    private router: Router
  ) {
    this.services$ = this.serviceCatalogService.services$;
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.loading = true;
    this.serviceCatalogService.refreshServiceList();
    // Simulate slight delay for visual consistency with premium feel
    setTimeout(() => this.loading = false, 600);
  }

  onAdd(): void {
    this.router.navigate(['/service-catalog/add']);
  }

  onEdit(service: ServiceCatalog): void {
    this.router.navigate(['/service-catalog', service.id]);
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to remove this service from the catalog?')) {
      this.serviceCatalogService.delete(id).subscribe();
    }
  }
}
