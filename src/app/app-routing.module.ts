import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const routes: Routes = [
  // { path: '',redirectTo:'/users',pathMatch:'full' },
  // { path: 'users', component: UserListComponent },
  // { path: 'user/id', component: UserDetailsComponent },
  // { path: 'add', component: UserFormComponent },
  // { path: 'users/edit/id', component: UserFormComponent },
  // {path:'users/:id', component:UserDetailsComponent}
    { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'users/add', component: UserFormComponent },
  { path: 'users/edit/:id', component: UserFormComponent },
  { path: 'users/:id', component: UserDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
