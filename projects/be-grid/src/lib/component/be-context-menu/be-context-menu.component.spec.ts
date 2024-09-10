import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeContextMenuComponent } from './be-context-menu.component';

describe('BeContextMenuComponent', () => {
  let component: BeContextMenuComponent;
  let fixture: ComponentFixture<BeContextMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeContextMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
