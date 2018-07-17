import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlfriendComponent } from './girlfriend.component';

describe('GirlfriendComponent', () => {
  let component: GirlfriendComponent;
  let fixture: ComponentFixture<GirlfriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirlfriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlfriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
