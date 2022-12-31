import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsettingpageComponent } from './appsettingpage.component';

describe('AppsettingpageComponent', () => {
  let component: AppsettingpageComponent;
  let fixture: ComponentFixture<AppsettingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppsettingpageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppsettingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
