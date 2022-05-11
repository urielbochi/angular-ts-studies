import { Component, OnInit } from '@angular/core';
import { Course } from './Course';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public courseVector:Course[] = [];
  public course!:Course
  public id!:number;

  constructor(private service:CoursesService) {

   }

  //Inicialização
  ngOnInit() {
    this.id = -1;
    this.course = new Course('', 0, '');
    this.courseVector = this.service.list()
  }

  register() {
    this.service.addNewCourse(this.course)
    this.course = new Course('', 0, '')
  }

  remove(index:number) {
    this.service.deleteCourse(index)
    this.id = -1;
  }

  edit(index:number) {
   this.id = index
   this.course = new Course(
     this.courseVector[index].courseName,
     this.courseVector[index].courseValue,
     this.courseVector[index].courseArea,
   )
  }

  editAction() {
    this.service.changeCourseData(this.id, this.course);
    this.course = new Course('', 0, '');
    this.id = -1;
  }

}
