import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketListsComponent } from './bucket-lists.component';

describe('BucketListsComponent', () => {
  let component: BucketListsComponent;
  let fixture: ComponentFixture<BucketListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
