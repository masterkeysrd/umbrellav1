import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPublicationComponent } from './product-publication.component';

describe('ProductPublicationComponent', () => {
  let component: ProductPublicationComponent;
  let fixture: ComponentFixture<ProductPublicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPublicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
