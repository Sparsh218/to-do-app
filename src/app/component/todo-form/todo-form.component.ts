import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/Todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  title: String;

  addTodo() {
    const newTodo: Task = {
      id: "111",
      title: this.title,
      checked: false,
      date: new Date()
    }

    this.todoService.addTodo(newTodo).subscribe();
    this.title = "";
  }

}
