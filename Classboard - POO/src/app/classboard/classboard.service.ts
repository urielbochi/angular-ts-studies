import { Injectable } from '@angular/core';
import { Grade } from './Grade';

@Injectable({
  providedIn: 'root'
})
export class ClassboardService {
  constructor() {}
  private studentData:Grade[] = []

  public listStudents() {
    return this.studentData
  }
  
  public addNewStudentData(newStudent:Grade) {
    this.studentData.push(newStudent)
  }

  public removeStudentData(id:number){
    this.studentData.splice(id, 1)
  }

  public editStudentData(id:number, newStudent:Grade){
    this.studentData[id] = newStudent
  }



}
