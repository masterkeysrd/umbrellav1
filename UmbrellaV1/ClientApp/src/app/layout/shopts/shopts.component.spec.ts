import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoptsComponent } from './shopts.component';

describe('ShoptsComponent', () => {
  let component: ShoptsComponent;
  let fixture: ComponentFixture<ShoptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
