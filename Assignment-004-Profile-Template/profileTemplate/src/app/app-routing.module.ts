import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProjectsAndAssignmentsComponent } from './projects-and-assignments/projects-and-assignments.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
{
  path: 'skills', 
  component: SkillsComponent
  }, 
 {
  path: 'experience', 
  component: ExperienceComponent
  },
 {
  path: 'education', 
  component: EducationComponent
  },
 {
  path: 'projects-And-Assignments', 
  component: ProjectsAndAssignmentsComponent 
  },
 {
  path: 'contact', 
  component: ContactComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
