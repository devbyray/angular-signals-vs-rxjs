import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsComputeValueComponent } from './signals-compute-value.component';

describe('SignalsComputeValueComponent', () => {
  let component: SignalsComputeValueComponent;
  let fixture: ComponentFixture<SignalsComputeValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignalsComputeValueComponent]
    });
    fixture = TestBed.createComponent(SignalsComputeValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
