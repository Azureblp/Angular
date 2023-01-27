import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUsersComponent } from './user/add-users/add-users.component';
import { DeleteUsersComponent } from './user/delete-users/delete-users.component';
import { EditUsersComponent } from './user/edit-users/edit-users.component';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { ViewUsersComponent } from './user/view-users/view-users.component';
import { TestingAreaComponent } from './testing-area/testing-area.component';

const routes: Routes = [


{path:'user', 
children:[ 
{path:'',component:ListUsersComponent},
{path:'list',component:ListUsersComponent},
{path:'view/:id',component:ViewUsersComponent},
{path:'delete/:id',component:DeleteUsersComponent},
{path:'edit/:id',component:EditUsersComponent},
{path:'create',component:AddUsersComponent},
{path:'testing',component:TestingAreaComponent}
] 

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
