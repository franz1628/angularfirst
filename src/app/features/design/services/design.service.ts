import { Injectable } from "@angular/core";
import { Design } from "../models/design.model";

@Injectable({
  providedIn: 'root'
})
export class DesignService {
  public designs: Design[] = [{
    id: 1,
    description: 'Modern Minimalist Layout',
    state: 1,
    created_at: new Date()
  }];

  public getById(id: number): Design | undefined {
    return this.designs.find(d => d.id === id);
  }

  public add(design: Design): void {
    const newId = this.designs.length > 0 ? Math.max(...this.designs.map(d => d.id)) + 1 : 1;
    this.designs.push({
      ...design,
      id: newId,
      created_at: new Date()
    });
  }

  public update(id: number, updatedData: Partial<Design>): void {
    const index = this.designs.findIndex(d => d.id === id);
    if (index !== -1) {
      this.designs[index] = {
        ...this.designs[index],
        ...updatedData
      };
    }
  }

  public delete(id: number): void {
    this.designs = this.designs.filter(x => x.id !== id);
  }
}