import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDscComponent } from './product-dsc.component';

describe('ProductDscComponent', () => {
  let component: ProductDscComponent;
  let fixture: ComponentFixture<ProductDscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
