import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdbrandingComponent } from './gdbranding.component';

describe('GdbrandingComponent', () => {
  let component: GdbrandingComponent;
  let fixture: ComponentFixture<GdbrandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdbrandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdbrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
