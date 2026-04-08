import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServiceCatalog } from '../../models/service-catalog.model';

@Component({
  selector: 'app-service-catalog-data-table',
  templateUrl: './service-catalog-data-table.component.html',
  styleUrls: ['./service-catalog-data-table.component.css']
})
export class ServiceCatalogDataTableComponent {
  @Input() services: ServiceCatalog[] | null = [];
  @Input() loading = false;
  
  @Output() edit = new EventEmitter<ServiceCatalog>();
  @Output() delete = new EventEmitter<number>();

  trackByServiceId(index: number, service: ServiceCatalog): number {
    return service.id;
  }
}
