import { Injectable } from '@angular/core';
import { Brand } from '../models/brand.model';

@Injectable({ providedIn: 'root' })
export class BrandService {
  public brands: Brand[] = [
    {
      id: 1,
      name: 'Porsche AG',
      headquarters: 'Stuttgart, Germany',
      segment: 'Sports/Luxury',
      foundedYear: 1931,
      heritage: 'Legendary 911 evolution and high-performance engineering.',
      isActive: true,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 2,
      name: 'Ferrari S.p.A.',
      headquarters: 'Maranello, Italy',
      segment: 'Supercars',
      foundedYear: 1947,
      heritage: 'The most prestigious Italian luxury and racing heritage.',
      isActive: true,
      created_at: new Date(),
      updated_at: new Date()
    }
  ];

  public getById(id: number): Brand | undefined {
    return this.brands.find(b => b.id === id);
  }

  public add(brand: Brand): void {
    const newId = this.brands.length > 0 ? Math.max(...this.brands.map(b => b.id)) + 1 : 1;
    this.brands.push({
      ...brand,
      id: newId,
      created_at: new Date(),
      updated_at: new Date()
    });
  }

  public update(id: number, updatedData: Partial<Brand>): void {
    const index = this.brands.findIndex(b => b.id === id);
    if (index !== -1) {
      this.brands[index] = {
        ...this.brands[index],
        ...updatedData,
        updated_at: new Date()
      };
    }
  }

  public delete(id: number): void {
    this.brands = this.brands.filter(x => x.id !== id);
  }
}
