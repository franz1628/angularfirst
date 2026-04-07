import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Design } from '../../models/design.model';

@Component({
  selector: 'app-design-registry',
  templateUrl: './design-registry.component.html'
})
export class DesignRegistryComponent {
  @Input() public design: Design = {
    id: 0,
    modelName: '',
    chassisCode: '',
    engineType: '',
    horsepower: 0,
    topSpeed: 0,
    bodyStyle: 'Coupe',
    designer: '',
    version: '1.0.0',
    isProductionReady: false,
    state: 1,
    created_at: new Date()
  };

  @Output() public add = new EventEmitter<Design>();

  onSave(): void {
    if (this.design.modelName.trim()) {
      this.add.emit(this.design);
    }
  }
}
