import { Component, OnInit} from '@angular/core';
import { Students } from '../../models/entities/app.constants';
import { StudentChild } from '../../models/entities/app.student.entity';
import { CommunicationService } from './../../services/app.communication.service';
@Component({
    selector: 'app-studentreceiver-component',
    templateUrl: './app.studentchild.view.html'
})
export class StudentReceiverComponent implements OnInit {
    student: StudentChild;
    students = Students;
    tableColumns: Array<string>;
    courseId: number;
    private filteredStudents: Array<StudentChild>;
   
    constructor(private serv: CommunicationService) {
        this.student = new StudentChild(0,'','','','','',0);
        this.tableColumns = new Array<string>();
        this.filteredStudents = new Array<StudentChild>();
        this.courseId = 0;
    }
    

    // write the public readonly property, this will be dependent on CourseId
    // when CourseId is changed, this property will also be updated by component  
    get FilteredStudents(): Array<StudentChild> {
        this.filteredStudents = new Array<StudentChild>();

        if(this.courseId > 0) {
            this.filteredStudents = this.students.filter((std,idx) => {
                return std.CourseId === this.courseId;
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
        this.serv.onDataReceived.subscribe((id: number) => {
            this.courseId =id;
        });
    }


}
