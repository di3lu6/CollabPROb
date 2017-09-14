import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailmarketingComponent } from './mailmarketing.component';

describe('MailmarketingComponent', () => {
  let component: MailmarketingComponent;
  let fixture: ComponentFixture<MailmarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailmarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailmarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
