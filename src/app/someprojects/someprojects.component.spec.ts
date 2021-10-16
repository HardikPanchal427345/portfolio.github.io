import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeprojectsComponent } from './someprojects.component';

describe('SomeprojectsComponent', () => {
  let component: SomeprojectsComponent;
  let fixture: ComponentFixture<SomeprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
