import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignEditpageComponent } from './campaign-editpage.component';

describe('CampaignEditpageComponent', () => {
  let component: CampaignEditpageComponent;
  let fixture: ComponentFixture<CampaignEditpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampaignEditpageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CampaignEditpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
