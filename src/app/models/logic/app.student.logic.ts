import { Course } from "../entities/app.course.entity";
import { Student } from '../entities/app.student.entity';

export class StudentLogic {
    private students: Array<Student>;
    static studentsList: Array<Student>;

    constructor() {
        this.students = new Array<Student>();
        StudentLogic.studentsList = new Array<Student>();
    }

    getStudents(): Array<Student> {
        return this.students;
    }

    AddStudent(student: Student): Array<Student> {
        this.students.push(student);
        StudentLogic.studentsList.push(student);
        return this.students;
    }

    UpdateStudent(student: Student): Array<Student> {
        var index = this.students.findIndex(x => x.StudentId === student.StudentId);
        if(index === -1) {
            this.AddStudent(student);
        }
        else {
            this.students[index] = student;
            StudentLogic.studentsList[index] = student;
        }
        return this.students;
    }

    generateId(): number {
        return this.students.length + 1;
    }
    
}