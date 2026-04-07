import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Design } from '../../models/design.model';
import { DesignService } from '../../services/design.service';

@Component({
  selector: 'app-design-editor-page',
  templateUrl: './design-editor-page.component.html'
})
export class DesignEditorPageComponent implements OnInit {

  public design: Design = {
    id: 0,
    modelName: '',
    chassisCode: '',
    engineType: '',
    horsepower: 0,
    topSpeed: 0,
    bodyStyle: 'Coupe',
    designer: '',
    version: '1.0.0',
    isProductionReady: false,
    state: 1,
    created_at: new Date()
  };

  public isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private designService: DesignService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      const found = this.designService.getById(Number(id));
      if (found) {
        this.design = { ...found };
      } else {
        this.router.navigate(['/design']);
      }
    }
  }

  onSave(design: Design): void {
    if (this.isEdit) {
      this.designService.update(this.design.id, design);
    } else {
      this.designService.add(design);
    }
    this.router.navigate(['/design']);
  }

  onCancel(): void {
    this.router.navigate(['/design']);
  }
}
