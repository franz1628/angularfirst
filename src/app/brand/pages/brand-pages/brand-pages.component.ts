import { Component, Input } from '@angular/core';
import { Brand } from '../../interfaces/brand.interface';
import { BrandService } from '../../services/brand.service';

@Component({
    selector: 'app-brand-pages',
    templateUrl: './brand-pages.component.html',
    styleUrl: './brand-pages.component.css'
})
export class BrandPagesComponent {
 
    constructor(public brandService:BrandService){

    }
    
    get brands ():Brand[] {
        return this.brandService.brands
    }

    add(brand:Brand){
        this.brandService.add(brand)
    }

    delete(id:number){
        this.brandService.delete(id)
    }

}
