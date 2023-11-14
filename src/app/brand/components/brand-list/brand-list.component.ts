import { Component, Input } from '@angular/core';
import { Brand } from '../../interfaces/brand.interface';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrl: './brand-list.component.css'
})
export class BrandListComponent {

  @Input()
  public brands: Brand[] = []

}
