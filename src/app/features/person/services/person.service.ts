import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({ providedIn: 'root' })
export class PersonService {
  public persons: Person[] = [
    {
      id: 1,
      documentNumber: '123456789',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1 555-0198',
      address: '123 Main St, Springfield',
      isActive: true,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 2,
      documentNumber: '987654321',
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phone: '+1 555-0205',
      address: '456 Oak Ave, Metropolis',
      isActive: true,
      created_at: new Date(),
      updated_at: new Date()
    }
  ];

  public getById(id: number): Person | undefined {
    return this.persons.find(p => p.id === id);
  }

  public add(person: Person): void {
    const newId = this.persons.length > 0 ? Math.max(...this.persons.map(p => p.id)) + 1 : 1;
    this.persons.push({
      ...person,
      id: newId,
      created_at: new Date(),
      updated_at: new Date()
    });
  }

  public update(id: number, updatedData: Partial<Person>): void {
    const index = this.persons.findIndex(p => p.id === id);
    if (index !== -1) {
      this.persons[index] = {
        ...this.persons[index],
        ...updatedData,
        updated_at: new Date()
      };
    }
  }

  public delete(id: number): void {
    this.persons = this.persons.filter(p => p.id !== id);
  }
}
