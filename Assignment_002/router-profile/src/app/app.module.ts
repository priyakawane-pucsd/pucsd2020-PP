import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { TechnicalDetailsComponent } from './technical-details/technical-details.component';
import { InternshipDetailsComponent } from './internship-details/internship-details.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationDetailsComponent,
    TechnicalDetailsComponent,
    InternshipDetailsComponent,
    AssignmentsComponent,
    ProjectsComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
