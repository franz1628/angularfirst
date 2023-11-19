import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Brand } from '../../interfaces/brand.interface';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html'
})
export class BrandListComponent {

  @Input()
  public brands: Brand[] = []

  @Output() delete:EventEmitter<number> = new EventEmitter();
  emitDelete(id:number):void{
    console.log(id);
    
    this.delete.emit(id)
  }
}
