import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoMeMaComponent } from './so-me-ma.component';

describe('SoMeMaComponent', () => {
  let component: SoMeMaComponent;
  let fixture: ComponentFixture<SoMeMaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoMeMaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoMeMaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
