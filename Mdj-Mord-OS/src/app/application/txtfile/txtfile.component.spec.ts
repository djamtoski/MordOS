import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtfileComponent } from './txtfile.component';

describe('TxtfileComponent', () => {
  let component: TxtfileComponent;
  let fixture: ComponentFixture<TxtfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxtfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
