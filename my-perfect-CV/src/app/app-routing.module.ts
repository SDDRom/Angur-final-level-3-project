import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { TaskListComponent } from './Tasks/task-list/task-list.component';
import { AddTaskComponent } from './Tasks/add-task/add-task.component';
import { TaskDetailComponent } from './Tasks/task-detail/task-detail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuardService } from './Guards/auth-guard.service';
import { EditTaskComponent } from './Tasks/edit-task/edit-task.component';

const routes: Routes = [
  {
    path:"",
    component:GetStartedComponent
  },
  {
    path:"main",
    component:MainComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "add-task",
    component: AddTaskComponent,
    children: [
      {
        path: "edit-task",
        component: EditTaskComponent
      }
    ]
  },
  {
    path: "add-task",
    component: AddTaskComponent
  },
  {
    path: "task-list",
    component: TaskListComponent
  },
  {
    path: "task-detail",
    component: TaskDetailComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: "**",
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
