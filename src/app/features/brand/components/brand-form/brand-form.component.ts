import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Brand } from '../../models/brand.model';

@Component({
  selector: 'app-brand-form',
  templateUrl: './brand-form.component.html'
})
export class BrandFormComponent {
  @Input() public brand: Brand = {
    id: 0,
    description: '',
    created_at: new Date(),
    updated_at: new Date()
  };

  @Output() public add = new EventEmitter<Brand>();

  onSave(): void {
    if (this.brand.description.trim()) {
      this.add.emit(this.brand);
    }
  }
}
