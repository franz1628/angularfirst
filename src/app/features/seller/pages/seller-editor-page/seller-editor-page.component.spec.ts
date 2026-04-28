import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerEditorPageComponent } from './seller-editor-page.component';

describe('SellerEditorPageComponent', () => {
  let component: SellerEditorPageComponent;
  let fixture: ComponentFixture<SellerEditorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellerEditorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
