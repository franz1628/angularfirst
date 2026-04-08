import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceCatalog } from '../../models/service-catalog.model';
import { ServiceCatalogService } from '../../services/service-catalog.service';

@Component({
  selector: 'app-service-catalog-editor-page',
  templateUrl: './service-catalog-editor-page.component.html',
  styleUrls: ['./service-catalog-editor-page.component.css']
})
export class ServiceCatalogEditorPageComponent implements OnInit {
  service: ServiceCatalog | null = null;
  id: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceCatalogService: ServiceCatalogService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = +idParam;
      this.serviceCatalogService.getById(this.id).subscribe({
        next: (service) => this.service = service,
        error: (err) => console.error('Error fetching service', err)
      });
    }
  }

  onSave(serviceData: Partial<ServiceCatalog>): void {
    if (this.id) {
      this.serviceCatalogService.update(this.id, serviceData).subscribe({
        next: () => this.navigateBack(),
        error: (err) => console.error('Error updating service', err)
      });
    } else {
      this.serviceCatalogService.add(serviceData).subscribe({
        next: () => this.navigateBack(),
        error: (err) => console.error('Error adding service', err)
      });
    }
  }

  onCancel(): void {
    this.navigateBack();
  }

  private navigateBack(): void {
    this.router.navigate(['/service-catalog']);
  }
}
