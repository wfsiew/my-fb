import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  liveDB: Item[] = [];
  lastId = 0;
  constructor(
    // private afSore: AngularFirestore
    ) { }

  getTask() {
    // return new Promise<any>((resolve, reject) => {
    //   this.afSore.collection('/todo').snapshotChanges()
    //     .subscribe(snapshots => {
    //       resolve(snapshots);
    //     });
    // });
  }

  deleteTask(id) {
    // return this.afSore.collection('todo').doc(id).delete();
  }


  loadTask() {
    const list = localStorage.getItem('todo');
    const id = localStorage.getItem('id');

    if (!id) {
      this.liveDB = [];
      this.lastId = 0;
    } else {
      this.liveDB = JSON.parse(list);
      this.lastId = parseInt(id);
    }
  }

  save() {
    // this.getLastId();
    // const o = {
    //   id: this.lastId,
    //   task: task.task
    // };
    // this.liveDB.push(o);
    // localStorage.setItem('id', this.lastId.toString());
    // localStorage.setItem('todo', JSON.stringify(this.liveDB));

    if (this.liveDB && this.liveDB.length) {
      localStorage.setItem('id', this.lastId.toString());
      localStorage.setItem('todo', JSON.stringify(this.liveDB));
    } else {
      this.lastId = 0;
      this.liveDB = [];
      localStorage.setItem('id', this.lastId.toString());
      localStorage.setItem('todo', JSON.stringify(this.liveDB));
    }
  }

  addTask(obj: Item) {
    if (!obj.id) {
      obj.id = ++this.lastId;
    }
    this.liveDB.push(obj);
    this.save();
  }

  getLastId() {
    const id = localStorage.getItem('id');
    if (id) {
      this.lastId = parseInt(id) + 1;
    } else {
      this.lastId = 0;
    }
  }

  setTasks() {
    return localStorage.getItem('todo');
  }

  deleteTasks(id) {
    this.liveDB = JSON.parse(localStorage.getItem('todo'));
    // this.liveDB = this.liveDB.filter(todo => todo.id !== id);
    // console.log(this.liveDB);
    const o = _.remove(this.liveDB, (n) => {
      return n.id === id;
    });
    this.save();
  }

  getTodo() {
    return localStorage.getItem('todo');
  }
}

export interface Item {
  id?: number;
  task?: string;
}
