import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DesignService } from '../../services/design.service';
import { Design } from '../../interfaces/design.interface';

@Component({
  selector: 'app-design-list',
  templateUrl: './design-list.component.html',
  styleUrl: './design-list.component.css'
})
export class DesignListComponent {

  @Input()
  public designs:Design[]=[]
  
  @Output() delete:EventEmitter<number> = new EventEmitter()
  emitDelete(id:number):void{
    this.delete.emit(id)
  }
}
