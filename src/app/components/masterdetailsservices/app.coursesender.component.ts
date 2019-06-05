import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/entities/app.course.entity';
import { Courses } from '../../models/entities/app.constants';
import { CommunicationService } from './../../services/app.communication.service';

@Component({
    selector: 'app-coursesender-component',
    templateUrl: './app.courseparent.view.html'
})
export class CourseSenderComponent implements OnInit {
    course: Course;
    courses = Courses;
    tableColumns: Array<string>;
    message: string;
    constructor(private serv: CommunicationService) {
        this.course = new Course(0, '', '', '', 0);
        this.tableColumns = new Array<string>();
    }

    ngOnInit(): void {
        for (let c in this.course) {
            this.tableColumns.push(c);
        }
    }

    getSelectedCourse(c: Course) : void {
        this.course = c;
        this.serv.ReceiveData(this.course.CourseId);
    }

    
}
