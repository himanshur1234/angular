import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoadComponent } from './dash-boad.component';

describe('DashBoadComponent', () => {
  let component: DashBoadComponent;
  let fixture: ComponentFixture<DashBoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashBoadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashBoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
