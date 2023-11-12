import {Component} from '@angular/core'

@Component({
    selector : 'app-counter',
    template : `
        {{counter}}

        <button (click)="increasy(1)">+1</button>
        <button (click)="reset()">Reset</button>
        <button (click)="increasy(-1)">-1</button>
    `
}) 
export class CounterComponent {
    public counter:number = 0;

    increasy (valor:number):void{
      this.counter +=valor
    }
  
    reset () {
      this.counter=0;
    }
}