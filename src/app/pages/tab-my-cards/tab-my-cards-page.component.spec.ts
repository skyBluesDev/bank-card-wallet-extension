import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMyCardsPage } from './tab-my-cards-page.component';

describe('Tab2Page', () => {
  let component: TabMyCardsPage;
  let fixture: ComponentFixture<TabMyCardsPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(TabMyCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
