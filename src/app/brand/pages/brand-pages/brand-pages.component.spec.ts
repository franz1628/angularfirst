import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandPagesComponent } from './brand-pages.component';

describe('BrandPagesComponent', () => {
  let component: BrandPagesComponent;
  let fixture: ComponentFixture<BrandPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrandPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
