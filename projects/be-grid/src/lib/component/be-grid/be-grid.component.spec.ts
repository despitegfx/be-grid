import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeGridComponent } from './be-grid.component';

describe('BeGridComponent', () => {
  let component: BeGridComponent;
  let fixture: ComponentFixture<BeGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
