import { Injectable } from '@angular/core';
import { Brand } from '../interfaces/brand.interface';

@Injectable({ providedIn: 'root' })
export class BrandService {
    public brands: Brand[] = [
        {
            id: 1,
            description: 'NUEVO',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            id: 2,
            description: 'NUEVO 2',
            created_at: new Date(),
            updated_at: new Date()
        }
    ]

    public add(brand:Brand){
        console.log(brand);
        
        this.brands.push({
            id:3,
            description:brand.description,
            created_at:new Date(),
            updated_at:new Date()
        })
        console.log(this.brands);
        
    }
}
