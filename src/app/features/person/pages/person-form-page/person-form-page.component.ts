import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person.model';
import { PersonService } from '../../services/person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-form-page',
  templateUrl: './person-form-page.component.html'
})
export class PersonFormPageComponent implements OnInit {

  person: Person = {
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

  isEditMode: boolean = false;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam;
      const existingPerson = this.personService.getById(id);
      if (existingPerson) {
        this.isEditMode = true;
        this.person = { ...existingPerson };
      } else {
        this.router.navigate(['/person']);
      }
    }
  }

  onSave(personData: Person): void {
    if (this.isEditMode) {
      this.personService.update(personData.id, personData);
    } else {
      this.personService.add(personData);
    }
    this.router.navigate(['/person']);
  }
}
