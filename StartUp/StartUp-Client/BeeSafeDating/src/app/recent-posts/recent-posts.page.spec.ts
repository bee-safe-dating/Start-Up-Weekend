import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPostsPage } from './recent-posts.page';

describe('RecentPostsPage', () => {
  let component: RecentPostsPage;
  let fixture: ComponentFixture<RecentPostsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentPostsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentPostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
