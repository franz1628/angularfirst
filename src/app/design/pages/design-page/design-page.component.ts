import { Component } from '@angular/core';
import { Design } from '../../interfaces/design.interface';
import { DesignService } from '../../services/design.service';

@Component({
  selector: 'app-design-page',
  templateUrl: './design-page.component.html'
})
export class DesignPageComponent {
  constructor(public designService:DesignService){

  }

  get designs(){
    return this.designService.designs
  }
  public add (design:Design){
    this.designService.add(design)
  }

  public delete(id:number){
    this.designService.delete(id)
  }
}
