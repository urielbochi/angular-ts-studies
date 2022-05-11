export class Grade {
    public studentName!:string
    public firstExam!:number
    public secondExam!:number

    constructor(name:string, firstExamResult:number, secondExamResult:number) {
        this.studentName = name;
        this.firstExam = firstExamResult;
        this.secondExam = secondExamResult;
    }
}