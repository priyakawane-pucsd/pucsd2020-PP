import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { TechnicalDetailsComponent } from './technical-details/technical-details.component';
import { InternshipDetailsComponent } from './internship-details/internship-details.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';



const routes: Routes = [

 {
  path: 'Education-Details', 
  component: EducationDetailsComponent
  }, 

 {
  path: 'Technical-Details', 
  component: TechnicalDetailsComponent
  },
 {
  path: 'Internship-Details', 
  component: InternshipDetailsComponent 
  },
 {
  path: 'Assignments', 
  component: AssignmentsComponent 
  },
 {
  path: 'Projects', 
  component: ProjectsComponent
  },
 {
  path: 'About-Me', 
  component: AboutMeComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
