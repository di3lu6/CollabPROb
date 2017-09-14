import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppmovilComponent } from './appmovil.component';

describe('AppmovilComponent', () => {
  let component: AppmovilComponent;
  let fixture: ComponentFixture<AppmovilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppmovilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppmovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
