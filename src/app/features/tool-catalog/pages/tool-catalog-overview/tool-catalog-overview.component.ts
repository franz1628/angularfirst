import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToolCatalog } from '../../models/tool-catalog.model';
import { ToolCatalogService } from '../../services/tool-catalog.service';

@Component({
  selector: 'app-tool-catalog-overview',
  templateUrl: './tool-catalog-overview.component.html',
  styleUrls: ['./tool-catalog-overview.component.css']
})
export class ToolCatalogOverviewComponent implements OnInit {
  tools$: Observable<ToolCatalog[]>;
  loading = false;

  constructor(
    private toolCatalogService: ToolCatalogService,
    private router: Router
  ) {
    this.tools$ = this.toolCatalogService.tools$;
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.loading = true;
    this.toolCatalogService.refreshToolList();
    setTimeout(() => this.loading = false, 600);
  }

  onAdd(): void {
    this.router.navigate(['/tool-catalog/add']);
  }

  onEdit(tool: ToolCatalog): void {
    this.router.navigate(['/tool-catalog', tool.id]);
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to remove this tool from the catalog?')) {
      this.toolCatalogService.delete(id).subscribe();
    }
  }
}
