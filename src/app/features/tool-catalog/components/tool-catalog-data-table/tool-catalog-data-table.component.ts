import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToolCatalog } from '../../models/tool-catalog.model';

@Component({
  selector: 'app-tool-catalog-data-table',
  templateUrl: './tool-catalog-data-table.component.html',
  styleUrls: ['./tool-catalog-data-table.component.css']
})
export class ToolCatalogDataTableComponent {
  @Input() tools: ToolCatalog[] | null = [];
  @Input() loading = false;
  
  @Output() edit = new EventEmitter<ToolCatalog>();
  @Output() delete = new EventEmitter<number>();

  trackByToolId(index: number, tool: ToolCatalog): number {
    return tool.id;
  }
}
