import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryAppComponent } from './gallery-app.component';

describe('GalleryAppComponent', () => {
  let component: GalleryAppComponent;
  let fixture: ComponentFixture<GalleryAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
