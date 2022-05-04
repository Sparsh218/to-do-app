import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { catchError, takeLast } from 'rxjs/operators';
import { Task } from '../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos : Task[];
  private listUrl = 'http://localhost:8080/tasks';

  private options = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { 

    // this.todos = [
    //   {
    //     id: "111",
    //     title: "Java",
    //     checked: true,
    //     date: new Date()
    //   },
    //   {
    //     id: "222",
    //     title: "Spring",
    //     checked: true,
    //     date: new Date()
    //   },
    //   {
    //     id: "333",
    //     title: "Angular",
    //     checked: false,
    //     date: new Date()
    //   }
    // ];
  }

  addTodo(todo: Task) {
    console.log("inside add todo");
    return this.httpClient.post('http://localhost:8080/addTask/', todo, this.options);
  }

  getTodos() {
    return this.httpClient.get(this.listUrl);
  }

  changeStatus(todo: Task) {
    this.todos.map(element => {
      if (element.id === todo.id) {
        element.checked = !element.checked;
      }
    });
    todo.checked = !todo.checked;
    console.log("inside update todo");

    return this.httpClient.put('http://localhost:8080/updateStatus/'+todo.id, todo, this.options);
  }

  removeTodo(todo: Task) {
    const index = this.todos.findIndex(element => element.id === todo.id
     );
     console.log("inside remove todo");
    this.todos.splice(index,1);
    return this.httpClient.delete('http://localhost:8080/deleteTask/'+todo.id, this.options);
  }
}
