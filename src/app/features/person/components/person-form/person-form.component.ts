import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent {
  @Input() person: Person = {
    id: 0,
    documentNumber: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    isActive: true,
    created_at: new Date(),
    updated_at: new Date()
  };
  @Output() save = new EventEmitter<Person>();

  onSave(): void {
    this.save.emit(this.person);
  }
}
