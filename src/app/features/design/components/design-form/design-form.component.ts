import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Design } from '../../models/design.model';

@Component({
  selector: 'app-design-form',
  templateUrl: './design-form.component.html'
})
export class DesignFormComponent {
  @Input() public design: Design = {
    id: 0,
    description: '',
    state: 1,
    created_at: new Date()
  };

  @Output() public add = new EventEmitter<Design>();

  onSave(): void {
    if (this.design.description.trim()) {
      this.add.emit(this.design);
    }
  }
}
