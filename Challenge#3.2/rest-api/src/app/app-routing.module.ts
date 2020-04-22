import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddIssueComponent } from './components/add-issue/add-issue.component';
import { EditIssueComponent } from './components/edit-issue/edit-issue.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { DeleteissueComponent } from './components/deleteissue/deleteissue.component';


const routes: Routes = [
  {
    path:'create',
    component:AddIssueComponent
  },
  {
    path:'update',
    component:EditIssueComponent
  },
  {
    path:'search',
    component:IssueListComponent
  },
  {
    path:'delete',
    component:DeleteissueComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
