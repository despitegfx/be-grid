import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeButtonComponent } from './be-button.component';

describe('BeButtonComponent', () => {
  let component: BeButtonComponent;
  let fixture: ComponentFixture<BeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
