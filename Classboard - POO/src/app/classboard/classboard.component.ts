import { Component, OnInit } from '@angular/core';
import { ClassboardService } from './classboard.service';
import { Grade } from './Grade';

@Component({
  selector: 'app-classboard',
  templateUrl: './classboard.component.html',
  styleUrls: ['./classboard.component.css']
})
export class ClassboardComponent implements OnInit {

  constructor(private service:ClassboardService) { }

  public allStudentData!:Grade[]
  public teacherInput!:Grade
  public id:number = -1


  ngOnInit(): void {
    this.allStudentData = this.service.listStudents();
    this.teacherInput = new Grade('', 0, 0); 
  }

  addNewStudent(){
    this.service.addNewStudentData(this.teacherInput)
    this.teacherInput = new Grade('', 0, 0)
  }

  removeStudent(id:number){
    this.service.removeStudentData(id)
  }

  editStudent(id:number) {
   this.teacherInput = new Grade(
     this.allStudentData[id].studentName,
     this.allStudentData[id].firstExam,
     this.allStudentData[id].secondExam
   )
   this.id = id
  }

  editStudentAction() {
    this.service.editStudentData(this.id, this.teacherInput)
    this.teacherInput = new Grade('', 0, 0)
    this.id = -1
  }




}
