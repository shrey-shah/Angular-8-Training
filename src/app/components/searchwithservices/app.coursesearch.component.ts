import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/entities/app.course.entity';
import { Courses } from '../../models/entities/app.constants';
import { SearchService } from 'src/app/services/app.search.service';
import { StringDecoder } from 'string_decoder';

@Component({
    selector: 'app-coursesearch-component',
    templateUrl: './app.coursesearch.view.html'
})
export class CourseSearchComponent implements OnInit {
    course: Course;
    courses = Courses;
    tableColumns: Array<string>;
    message: string;
    private filteredCourses: Array<Course>;
    ReceivedText: string;

    constructor(private serv: SearchService) {
        this.course = new Course(0, '', '', '', 0);
        this.tableColumns = new Array<string>();
        this.filteredCourses = new Array<Course>();
        this.ReceivedText = "";
    }

    // get filtered courses on the basis of value eneterd in the text box
    get FilteredCourses(): Array<Course> {
        if(this.ReceivedText.length === 0) {
            this.filteredCourses = this.courses;
        }
        else {
            this.filteredCourses = this.courses.filter((c,idx) => { 
                return c.CourseName.toLowerCase().includes(this.ReceivedText.toLowerCase());
            });
        }

      //  emit event that passess courseid for student filter
         let courseIds: Array<number>;
         courseIds = new Array<number>();
         for(let c of this.filteredCourses) {
             courseIds.push(c.CourseId);
         }

        this.serv.ReceiveCoursesData(courseIds);

        return this.filteredCourses;
    }

    ngOnInit(): void {
        for (let c in this.course) {
            this.tableColumns.push(c);
        }
        this.filteredCourses = this.courses;
         // subscribe to the event from the service
         this.serv.onDataReceived.subscribe((text: string) => {
            this.ReceivedText = text;
    }); 
}

}