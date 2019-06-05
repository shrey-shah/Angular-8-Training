    import { AbstractControl } from '@angular/forms';
    import { Courses } from 'src/app/models/entities/app.constants';
import { StudentLogic } from 'src/app/models/logic/app.student.logic';
import { Student } from 'src/app/models/entities/app.student.entity';

export class DomainValidator {
    // here any type is used
    // because if the data is valid
    // then method returns null 
    // else it will return JSON object as {invalid:true}

    static ValidateLength(ctrl: AbstractControl): any {
        let value = ctrl.value;
        if(value.toString().length <= 10) {
            return null;
        }else {
            return {invalid:true};
        }
    }

    static ValidateMaxCapacity(ctrl: AbstractControl): any {
        let value = ctrl.value;
        let courses = Courses;
        let students = new Array<Student>();
        //let logic = new StudentLogic();
        let CourseCapacity: number;

        students = StudentLogic.studentsList;

        if(students.length === 0) {
            return null;
        }

          for(let course of courses) {
             if(course.CourseId === value) {
                CourseCapacity = course.CourseStudentCapacity;
                break;
             }
          }

          let cnt=0;
          for(let s of students) {
              if(s.CourseId === value)
                cnt++;
          }

          if(cnt === CourseCapacity) {
            return {invalid:true};
          }
          else {
            return null;
          }
    }
}