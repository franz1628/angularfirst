import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Mecanic } from '../../models/mecanic.model';
import { MecanicService } from '../../services/mecanic.service';

@Component({
  selector: 'app-mecanic-overview',
  templateUrl: './mecanic-overview.component.html',
  styleUrls: ['./mecanic-overview.component.css']
})
export class MecanicOverviewComponent implements OnInit {
  mechanics$: Observable<Mecanic[]>;
  loading = false;

  constructor(
    private mecanicService: MecanicService,
    private router: Router
  ) {
    this.mechanics$ = this.mecanicService.mechanics$;
  }

  ngOnInit(): void {
    this.mecanicService.refreshMecanicList();
  }

  onAdd(): void {
    this.router.navigate(['/mecanic/new']);
  }

  onEdit(mecanic: Mecanic): void {
    this.router.navigate(['/mecanic/edit', mecanic.id]);
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to remove this mechanic?')) {
      this.mecanicService.delete(id).subscribe({
        next: () => this.mecanicService.refreshMecanicList(),
        error: (err) => console.error('Delete failed', err)
      });
    }
  }
}
