import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mecanic } from '../../models/mecanic.model';
import { MecanicService } from '../../services/mecanic.service';

@Component({
  selector: 'app-mecanic-editor-page',
  templateUrl: './mecanic-editor-page.component.html',
  styleUrls: ['./mecanic-editor-page.component.css']
})
export class MecanicEditorPageComponent implements OnInit {
  isEdit = false;
  loading = false;
  selectedMecanic: Mecanic | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mecanicService: MecanicService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'new') {
      this.isEdit = true;
      this.loadMecanic(Number(id));
    }
  }

  loadMecanic(id: number): void {
    this.loading = true;
    this.mecanicService.getById(id).subscribe({
      next: (mecanic) => {
        this.selectedMecanic = mecanic;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load mechanic', err);
        this.loading = false;
        this.router.navigate(['/mecanic']);
      }
    });
  }

  onSave(mecanicData: Partial<Mecanic>): void {
    this.loading = true;
    const action = this.isEdit && this.selectedMecanic
      ? this.mecanicService.update(this.selectedMecanic.id, mecanicData)
      : this.mecanicService.add(mecanicData);

    action.subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/mecanic']);
      },
      error: (err) => {
        this.loading = false;
        console.error('Operation failed', err);
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/mecanic']);
  }
}
