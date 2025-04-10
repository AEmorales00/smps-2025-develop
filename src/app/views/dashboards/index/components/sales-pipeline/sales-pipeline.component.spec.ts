import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPipelineComponent } from './sales-pipeline.component';

describe('SalesPipelineComponent', () => {
  let component: SalesPipelineComponent;
  let fixture: ComponentFixture<SalesPipelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesPipelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
