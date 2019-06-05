import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Student } from 'src/app/models/entities/app.student.entity';
import { Course } from 'src/app/models/entities/app.course.entity';
import { Courses } from 'src/app/models/entities/app.constants';
import { StudentLogic } from 'src/app/models/logic/app.student.logic';
import { DomainValidator } from './app.custom.validator';

@Component({
    selector: 'app-student-component',
    templateUrl: './app.student.view.html',
})
export class StudentComponent implements OnInit {
    student: Student;
    students: Array<Student>;
    courses = Courses;  //Courses id constant so we can directly assign it to the variable
    private logic: StudentLogic;
    tableColumns: Array<string>;
    toggleForm: boolean;

    frmStudent: FormGroup;

    constructor() { 
        this.student = new Student();
        this.logic = new StudentLogic();
        this.students = new Array<Student>();
        this.tableColumns = new Array<string>();
        this.initProp();

        //link model properties from student class to formcontrols
        this.frmStudent = new FormGroup({
            StudentId: new FormControl(this.student.StudentId,
                Validators.compose([Validators.required, Validators.pattern('[0-9]+'),
                                    Validators.maxLength(5)])),

            StudentCode: new FormControl(this.student.StudentCode,
                 Validators.compose([DomainValidator.ValidateLength])),

            StudentName: new FormControl(this.student.StudentName,
                Validators.compose([Validators.pattern('[A-Za-z]+')])),

            StudentAddress: new FormControl(this.student.StudentAddress),

            StudentCity: new FormControl(this.student.StudentCity,
                Validators.compose([Validators.pattern('[A-Za-z]+')])),

            StudentState: new FormControl(this.student.StudentState,
                Validators.compose([Validators.pattern('[A-Za-z]+')])),

            CourseId: new FormControl(this.student.CourseId,
                Validators.compose([DomainValidator.ValidateMaxCapacity])),
        });
    }

    private initProp(): void {
        this.student.StudentId = this.logic.generateId();
        this.student.StudentCode = "STUD-" + this.student.StudentId;
        this.student.StudentName = "";
        this.student.StudentAddress = "";
        this.student.StudentCity = "";
        this.student.StudentState = "";
        this.student.CourseId = 0;
    }

    clear(): void {
        // redeclare object
        this.student = new Student();
        // nullify all values
        this.initProp();
        // set these nullify values to formGroup 
        this.frmStudent.setValue(this.student);
    }

    save(): void {
        //reading state of the form aka frmStudent (formgroup)  formgroup.value represents the current state of the form
        this.student = this.frmStudent.value;
        this.students = this.logic.UpdateStudent(this.student);
        console.log(JSON.stringify(this.students));
        this.toggleForm = false;
    }

    //exceutes immediately after the constructor.. write heavy code here instead of constructor
    ngOnInit(): void {
        this.toggleForm = false;

        for(let column in this.student) {
            this.tableColumns.push(column);
        }
     }

     // this method will be called on click of Student Table Row
    getSelectedStudent(std: Student): void {
        this.frmStudent.setValue(std);
    }

    isToggleForm(): void {
        this.toggleForm = !this.toggleForm;
    }
}
