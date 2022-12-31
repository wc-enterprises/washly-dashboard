import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEditpageComponent } from './service-editpage.component';

describe('ServiceEditpageComponent', () => {
  let component: ServiceEditpageComponent;
  let fixture: ComponentFixture<ServiceEditpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceEditpageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceEditpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
