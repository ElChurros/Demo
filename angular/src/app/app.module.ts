import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { DefaultComponent } from './components/default.component';
import { UserEditComponent } from './components/user.edit.component';
import { TaskNewComponent } from './components/task.new.component';
import { TaskDetailComponent } from './components/task.detail.component';
import { TaskEditComponent } from './components/task.edit.component';

import { GenerateDatePipe } from './pipes/generate.date.pipe';

import { UserService } from './services/user.service'
import { TaskService } from './services/task.service'

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    LoginComponent,
    RegisterComponent,
    UserEditComponent,
    TaskNewComponent,
    TaskDetailComponent,
    TaskEditComponent,
    GenerateDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    DragDropModule
  ],
  providers: [
          UserService,
          TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
