import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfieCameraComponent } from './selfie-camera.component';

describe('SelfieCameraComponent', () => {
  let component: SelfieCameraComponent;
  let fixture: ComponentFixture<SelfieCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfieCameraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfieCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
