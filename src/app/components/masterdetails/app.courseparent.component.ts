import { Component, OnInit } from '@angular/core';
import { Course } from './../../models/entities/app.course.entity';
import { Courses } from './../../models/entities/app.constants';
@Component({
    selector: 'app-courseparent-component',
    templateUrl: './app.courseparent.view.html'
})
export class CourseParentComponent implements OnInit {
    course: Course;
    courses = Courses;
    tableColumns: Array<string>;
    message: string;
    constructor() {
        this.course = new Course(0, '', '', '', 0);
        this.tableColumns = new Array<string>();
        this.message = "";
    }

    ngOnInit(): void {
        for (let c in this.course) {
            this.tableColumns.push(c);
        }
    }

    getSelectedCourse(c: Course) : void {
        this.course = c;
    }

    getNotification($event): void {
        this.message = $event;       
    }
}
