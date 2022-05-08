import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsIconComponent } from './os-icon.component';

describe('OsIconComponent', () => {
  let component: OsIconComponent;
  let fixture: ComponentFixture<OsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
