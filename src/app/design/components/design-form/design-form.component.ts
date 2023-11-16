import { Component, EventEmitter, Output } from '@angular/core';
import { Design } from '../../interfaces/design.interface';

@Component({
  selector: 'app-design-form',
  templateUrl: './design-form.component.html',
  styleUrl: './design-form.component.css'
})
export class DesignFormComponent {
  public design : Design = {
    id:0,
    description:'',
    state:1,
    created_at:new Date()
  }
  
  @Output() add:EventEmitter<Design> = new EventEmitter()
  emit() {
    this.add.emit(this.design)
  }

}
