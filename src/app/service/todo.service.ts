import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ToDo } from '../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos : ToDo[];

  constructor() { 
    this.todos = [
      {
        id: "111",
        title: "Java",
        isCompleted: true,
        date: new Date()
      },
      {
        id: "222",
        title: "Spring",
        isCompleted: true,
        date: new Date()
      },
      {
        id: "333",
        title: "Angular",
        isCompleted: false,
        date: new Date()
      }
    ];
  }

  addTodo(todo: ToDo) {
    this.todos.push(todo);
  }

  getTodos() {
    return of(this.todos);
  }

  changeStatus(todo: ToDo) {
    this.todos.map(element => {
      if (element.id === todo.id) {
        element.isCompleted = !element.isCompleted;
      }
    });
  }

  removeTodo(todo: ToDo) {
    const index = this.todos.findIndex(element => element.id === todo.id
     );

    this.todos.splice(index,1);
  }
}
