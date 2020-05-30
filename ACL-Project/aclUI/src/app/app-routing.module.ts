import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { GroupsComponent } from './groups/groups.component';
import { DirectoryComponent } from './directory/directory.component';
import { FileComponent } from './file/file.component';
import { LoginComponent } from './login/login.component';
import { AclComponent } from './acl/acl.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { SearchuserComponent } from './searchuser/searchuser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { CreategroupComponent } from './creategroup/creategroup.component';
import { GroupmembersComponent } from './groupmembers/groupmembers.component';
import { UserpermissionComponent } from './userpermission/userpermission.component';
import { AddMemberToGroupComponent } from './groups/add-member-to-group/add-member-to-group.component';



const routes: Routes = [
{path: 'users/create', component: UsersComponent},
{path: 'groups/create', component: GroupsComponent},
{path: 'directory/create', component: DirectoryComponent},
{path: 'file/create', component: FileComponent},
{path: 'login', component: LoginComponent},
{path: 'acl', component: AclComponent},
{path: 'createuser', component: CreateuserComponent},
{path: 'updateuser', component: UpdateuserComponent},
{path: 'searchuser', component: SearchuserComponent},
{path: 'deleteuser', component: DeleteuserComponent},
{path: 'creategroup', component: CreategroupComponent},
{path: 'groupmembers', component: GroupmembersComponent},
{path: 'userpermission', component: UserpermissionComponent},
{path: 'add-member-to-group', component: AddMemberToGroupComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
