import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponent } from './components/simplecomponent/app.simple.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculateComponent } from './components/calculatecomponent/app.calculate.component';
import { Student } from './models/entities/app.student.entity';
import { StudentComponent } from './components/studentcomponent/app.student.component';
import { CourseParentComponent } from './components/masterdetails/app.courseparent.component';
import { StudentChildComponent } from './components/masterdetails/app.studentchild.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    CalculateComponent,
    StudentComponent,
    CourseParentComponent,
    StudentChildComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [CourseParentComponent]
})
export class AppModule { }
