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
import { UtilityServiceComponent } from './components/utilityservicecomponent/app.utilityservice.component';
import { CourseSenderComponent } from './components/masterdetailsservices/app.coursesender.component';
import { StudentReceiverComponent } from './components/masterdetailsservices/app.studentreceiver.component';
import { StudentSearchComponent } from './components/searchwithservices/app.studentsearch.component';
import { CourseSearchComponent } from './components/searchwithservices/app.coursesearch.component';
import { SearchComponent } from './components/searchwithservices/app.search.component';
import { SharedServiceComponent } from './components/sharedservicecomponent/app.sharedservice.component';
import { SharedModule } from 'src/sharedmodule/app.shared.module';


@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    CalculateComponent,
    StudentComponent,
    CourseParentComponent,
    StudentChildComponent,
    UtilityServiceComponent,
    CourseSenderComponent,
    StudentReceiverComponent,
    SearchComponent,
    CourseSearchComponent,
    StudentSearchComponent,
    SharedServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [SharedServiceComponent],
 // bootstrap: [SearchComponent,CourseSearchComponent,StudentSearchComponent]
})
export class AppModule { }
