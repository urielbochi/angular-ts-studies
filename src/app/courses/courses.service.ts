import { Injectable } from '@angular/core';
import { Course } from './Course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor() { }

  private courseList:Course[] = [
    new Course("Angular", 800, "Desenvolvimento"),
    new Course ("PHP", 590, "Desenvolvimento"),
    new Course ("C++", 900, "Desenvolvimento"),
  ]

  //Cadastro de curso
  public addNewCourse(course:Course){
    this.courseList.push(course)
  }

  //Listar
  public list() {
    return this.courseList
  }

  //Alteração
  public changeCourseData(id:number, curso:Course){
    this.courseList[id] = curso
  }

  // Exclusão
  public deleteCourse(id:number) {
    this.courseList.splice(id, 1)
  }
}
