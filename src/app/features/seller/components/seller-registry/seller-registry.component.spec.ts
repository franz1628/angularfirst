import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerRegistryComponent } from './seller-registry.component';

describe('SellerRegistryComponent', () => {
  let component: SellerRegistryComponent;
  let fixture: ComponentFixture<SellerRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellerRegistryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
