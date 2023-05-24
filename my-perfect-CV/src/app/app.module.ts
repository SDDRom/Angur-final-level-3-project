import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import {AngularFireModule} from '@angular/fire/compat'
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Firestore, collection,doc, getDocs,getFirestore,provideFirestore,setDoc } from '@angular/fire/firestore'
import { environment } from '../environments/environment';
import { AddTaskComponent } from './Tasks/add-task/add-task.component';
import { TaskListComponent } from './Tasks/task-list/task-list.component';
import { Observable,from } from 'rxjs'
import { AuthenticationService } from './services/authentication.service';
import { GetStartedComponent } from './get-started/get-started.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { TaskDetailComponent } from './Tasks/task-detail/task-detail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EditTaskComponent } from './Tasks/edit-task/edit-task.component';
import { FooterComponent } from './footer/footer.component';

FormsModule

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    NavBarComponent,
    LoginComponent,
    SignupComponent,
    AddTaskComponent,
    TaskListComponent,
    GetStartedComponent,
    TaskDetailComponent,
    NotfoundComponent,
    EditTaskComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
