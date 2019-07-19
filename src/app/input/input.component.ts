import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { TodoService } from '../service/todo.service';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  formgroup: FormGroup;
  tasks: any = [];
  isSaved = false;
  isSpin = false;
  constructor(
    // private db: AngularFirestore,
    private fb: FormBuilder,
    private http: HttpClient,
    private todoService: TodoService
  ) {
  }

  ngOnInit() {
    this.createForm();
    this.getTasks();
  }
  createForm() {
    this.formgroup = this.fb.group(
      {
        task: [null, [Validators.required,
          Validators.minLength(0),
          Validators.maxLength(150)]]
      }
    );
  }

  addTask(data) {
    // this.isSpin = true;
    // this.db.collection('todo').add(data).then((res) => {
    //   
    //   this.isSpin = false;
    // }, er => {
    //   console.log(er);
    // });
    this.todoService.addTask(data);
    this.resetForm();
    this.getTasks();
    this.isSaved = false;
  }

  getTasks() {
    // this.todoService.getTask().then((res) => {
    //   this.tasks = res;
    // });
    this.tasks = JSON.parse(this.todoService.getTodo());
  }

  countChangedHandler(count) {
    this.getTasks();
  }
  resetForm() {
    this.isSaved = true;
    this.formgroup.reset();
    setTimeout(() => {
      this.isSaved = false;
    }, 2000);
  }
}
