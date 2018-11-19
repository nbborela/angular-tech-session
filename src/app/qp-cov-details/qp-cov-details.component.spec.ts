import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QpCovDetailsComponent } from './qp-cov-details.component';

describe('QpCovDetailsComponent', () => {
  let component: QpCovDetailsComponent;
  let fixture: ComponentFixture<QpCovDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QpCovDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QpCovDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
