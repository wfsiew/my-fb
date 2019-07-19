import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService, Item } from '../service/todo.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();
  @Input() tasks: Item;
  isSpin = false;
  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {}

  deleteTask(id) {
    this.isSpin = true;
    // this.todoService.deleteTask(id)
    // .then((res) => {
    //   this.isSpin = false;
    //   },
    //   err => {
      //     console.log(err);
      //   });
    this.todoService.deleteTasks(id);
    this.countChanged.emit(11);
    this.isSpin = false;
  }
}
