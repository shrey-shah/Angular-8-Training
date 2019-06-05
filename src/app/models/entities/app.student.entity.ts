export class Student {
    public StudentId: number;
    public StudentCode: string;
    public StudentName: string;
    public StudentAddress: string;
    public StudentCity: string;
    public StudentState: string;
    public CourseId: number;

}

export class StudentChild {

    constructor(
    public StudentId: number,
    public StudentCode: string,
    public StudentName: string,
    public StudentAddress: string,
    public StudentCity: string,
    public StudentState: string,
    public CourseId: number,
    ) {    }
}