import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Pipe({
  name: 'brandImage'
})
export class BrandImagePipe implements PipeTransform {

  transform(value: string | null | undefined): string {
    if (!value) return 'assets/placeholder-logo.png';
    
    if (value.startsWith('http') || value.startsWith('data:')) {
      return value;
    }
    
    return `${environment.apiUrl}/${value}`;
  }
}
