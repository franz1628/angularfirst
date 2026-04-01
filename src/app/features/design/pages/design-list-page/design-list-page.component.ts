import { Component, OnInit } from '@angular/core';
import { Design } from '../../models/design.model';
import { DesignService } from '../../services/design.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-design-list-page',
  templateUrl: './design-list-page.component.html'
})
export class DesignListPageComponent implements OnInit {

  constructor(public designService: DesignService, private router: Router) {}

  ngOnInit(): void {}

  get designs(): Design[] {
    return this.designService.designs;
  }

  onAdd(): void {
    this.router.navigate(['/design/add']);
  }

  onEdit(id: number): void {
    this.router.navigate(['/design', id]);
  }

  onDelete(id: number): void {
    this.designService.delete(id);
  }
}
