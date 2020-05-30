import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupmembersComponent } from './groupmembers.component';

describe('GroupmembersComponent', () => {
  let component: GroupmembersComponent;
  let fixture: ComponentFixture<GroupmembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupmembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
