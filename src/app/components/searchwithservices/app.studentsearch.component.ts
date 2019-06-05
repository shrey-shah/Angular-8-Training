import { Component, OnInit} from '@angular/core';
import { Students } from '../../models/entities/app.constants';
import { StudentChild } from '../../models/entities/app.student.entity';
import { SearchService } from 'src/app/services/app.search.service';
@Component({
    selector: 'app-studentsearch-component',
    templateUrl: './app.studentsearch.view.html'
})
export class StudentSearchComponent implements OnInit {
    student: StudentChild;
    students = Students;
    tableColumns: Array<string>;
    courseIds: Array<number>;
    private filteredStudents: Array<StudentChild>;
   
    constructor(private serv: SearchService) {
        this.student = new StudentChild(0,'','','','','',0);
        this.tableColumns = new Array<string>();
        this.filteredStudents = new Array<StudentChild>();
        this.courseIds = new Array<number>();
    }
    

    // write the public readonly property, this will be dependent on CourseId
    // when CourseId is changed, this property will also be updated by component  
    get FilteredStudents(): Array<StudentChild> {
        this.filteredStudents = new Array<StudentChild>();

        if(this.courseIds.length > 0) {
            this.filteredStudents = this.students.filter((std,idx) => {
                return this.courseIds.indexOf(std.CourseId) != -1;
            });
        }else {
            this.filteredStudents = this.students;
        }
        return this.filteredStudents;
    }

    // the method that will be invoked immediately after the ctor
    ngOnInit(): void {
        // read each property from student and push it in array
        for (let c in this.student) {
            this.tableColumns.push(c);
        }

        // subscribe to the event from the service
         this.serv.onCourseIdsReceived.subscribe((ids: Array<number>) => {
             this.courseIds = ids;
         });
    }


}
