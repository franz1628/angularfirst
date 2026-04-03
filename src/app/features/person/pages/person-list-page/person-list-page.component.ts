import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person.model';
import { PersonService } from '../../services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list-page',
  templateUrl: './person-list-page.component.html'
})
export class PersonListPageComponent implements OnInit {

  constructor(public personService: PersonService, private router: Router) {}

  ngOnInit(): void {}

  get persons(): Person[] {
    return this.personService.persons;
  }

  onAdd(): void {
    this.router.navigate(['/person/add']);
  }

  onEdit(id: number): void {
    this.router.navigate(['/person', id]);
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to remove this owner record?')) {
      this.personService.delete(id);
    }
  }
}
