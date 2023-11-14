import { Component, EventEmitter, Output } from '@angular/core';
import { Brand } from '../../interfaces/brand.interface';

@Component({
  selector: 'app-brand-form',
  templateUrl: './brand-form.component.html',
  styleUrl: './brand-form.component.css'
})
export class BrandFormComponent {
  public brand: Brand = {
    id: 0,
    description: '',
    created_at: new Date(),
    updated_at: new Date()
  }

  @Output() add:EventEmitter<Brand> = new EventEmitter();

  emit():void{

    
    this.add.emit(this.brand)
    this.brand.description=''
  }

 
}
