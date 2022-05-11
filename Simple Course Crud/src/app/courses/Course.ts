export class Course {
    public courseArea:string= "";
    public courseName:string = "";
    public courseValue:number= 0;

    constructor(name:string, value:number, area:string) {
        this.courseName = name;
        this.courseValue = value;
        this.courseArea = area;
    }

}