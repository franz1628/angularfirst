import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDataTableComponent } from './seller-data-table.component';

describe('SellerDataTableComponent', () => {
  let component: SellerDataTableComponent;
  let fixture: ComponentFixture<SellerDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellerDataTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
