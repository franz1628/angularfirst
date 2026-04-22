import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToolCatalog } from '../../models/tool-catalog.model';
import { ToolCatalogService } from '../../services/tool-catalog.service';

@Component({
  selector: 'app-tool-catalog-editor-page',
  templateUrl: './tool-catalog-editor-page.component.html',
  styleUrls: ['./tool-catalog-editor-page.component.css']
})
export class ToolCatalogEditorPageComponent implements OnInit {
  tool: ToolCatalog | null = null;
  id: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toolCatalogService: ToolCatalogService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam && idParam !== 'add') {
      this.id = +idParam;
      this.toolCatalogService.getById(this.id).subscribe({
        next: (tool) => this.tool = tool,
        error: (err) => console.error('Error fetching tool', err)
      });
    }
  }

  onSave(toolData: any): void {
    if (this.id) {
      this.toolCatalogService.update(this.id, toolData).subscribe({
        next: () => this.navigateBack(),
        error: (err) => console.error('Error updating tool', err)
      });
    } else {
      this.toolCatalogService.add(toolData).subscribe({
        next: () => this.navigateBack(),
        error: (err) => console.error('Error adding tool', err)
      });
    }
  }

  onCancel(): void {
    this.navigateBack();
  }

  private navigateBack(): void {
    this.router.navigate(['/tool-catalog']);
  }
}
