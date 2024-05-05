import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDestinationsPage } from './tab-destinations-page.component';

describe('Tab1Page', () => {
  let component: TabDestinationsPage;
  let fixture: ComponentFixture<TabDestinationsPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(TabDestinationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
