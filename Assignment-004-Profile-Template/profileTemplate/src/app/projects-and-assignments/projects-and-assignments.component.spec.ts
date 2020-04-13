import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsAndAssignmentsComponent } from './projects-and-assignments.component';

describe('ProjectsAndAssignmentsComponent', () => {
  let component: ProjectsAndAssignmentsComponent;
  let fixture: ComponentFixture<ProjectsAndAssignmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsAndAssignmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsAndAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
