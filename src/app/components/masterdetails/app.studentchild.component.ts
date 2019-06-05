import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Students } from './../../models/entities/app.constants';
import { StudentChild } from '../../models/entities/app.student.entity';
@Component({
    selector: 'app-studentchild-component',
    templateUrl: './app.studentchild.view.html'
})
export class StudentChildComponent implements OnInit {
    student: StudentChild;
    students = Students;
    tableColumns: Array<string>;
    private courseId: number;
    private filteredStudents: Array<StudentChild>;

    @Output()
    dataRecived: EventEmitter<string>;

    constructor() {
        this.student = new StudentChild(0,'','','','','',0);
        this.tableColumns = new Array<string>();
        this.filteredStudents = new Array<StudentChild>();
        this.courseId = 0;
        this.dataRecived = new EventEmitter<string>();
    }
    @Input()
    set CourseId(v: number) {
        this.courseId =v;
        console.log(v);
    }

    get CourseId(): number {
        return this.courseId;
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
            return this.filteredStudents;
        }
        
        this.onDataReceived();

        return this.filteredStudents;
    }


    // the method is used to emit an event
    onDataReceived(): void {
        if(this.filteredStudents.length === 0) {
            this.dataRecived.emit(`No students found for Course Id ${this.courseId}`);
        }
        else {
            this.dataRecived.emit(`We found ${this.filteredStudents.length} records matched with Course Id ${this.courseId}`);
        }
    }

    // the method that will be invoked immediately after the ctor
    ngOnInit(): void {
        // read each property from student and push it in array
        for (let c in this.student) {
            this.tableColumns.push(c);
        }
    }


}
