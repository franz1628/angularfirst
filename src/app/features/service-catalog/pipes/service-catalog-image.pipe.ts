import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Pipe({
  name: 'serviceCatalogImage'
})
export class ServiceCatalogImagePipe implements PipeTransform {

  transform(value: string | null | undefined): string {
    if (!value) return 'assets/placeholder-service.png';
    
    if (value.startsWith('http') || value.startsWith('data:')) {
      return value;
    }
    
    return `${environment.apiUrl}/${value}`;
  }
}
