import { Course } from './app.course.entity';
import { StudentChild } from './app.student.entity';

export const Courses: Array<Course> = new Array<Course>();

Courses.push(new Course(1001,'Hc-Path','Pathology','Pathology course for lab tests',1));
Courses.push(new Course(1002,'Hc-Radio','Radiology','Radiology course for lab tests',2));
Courses.push(new Course(1003,'Hc-Phy','Physiology','Physiology course for lab tests',250));
Courses.push(new Course(1004,'Hc-Medicine','Medicine','Medicine course for doctors',50));

export const Students: Array<StudentChild> = new Array<StudentChild>();

Students.push(new StudentChild(101,'stu-101','abc','aaa','sss','ddd',1001));
Students.push(new StudentChild(102,'stu-102','abc','aaa','sss','ddd',1001));
Students.push(new StudentChild(103,'stu-103','abc','aaa','sss','ddd',1002));
Students.push(new StudentChild(104,'stu-104','abc','aaa','sss','ddd',1002));
Students.push(new StudentChild(105,'stu-105','abc','aaa','sss','ddd',1003));
Students.push(new StudentChild(106,'stu-106','abc','aaa','sss','ddd',1003));
Students.push(new StudentChild(107,'stu-107','abc','aaa','sss','ddd',1003));
Students.push(new StudentChild(108,'stu-108','abc','aaa','sss','ddd',1003));