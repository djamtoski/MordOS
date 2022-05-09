import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderAppComponent } from './folder-app.component';

describe('FolderAppComponent', () => {
  let component: FolderAppComponent;
  let fixture: ComponentFixture<FolderAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
