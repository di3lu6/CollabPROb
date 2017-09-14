import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitewebComponent } from './siteweb.component';

describe('SitewebComponent', () => {
  let component: SitewebComponent;
  let fixture: ComponentFixture<SitewebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitewebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitewebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
