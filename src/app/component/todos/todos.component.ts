import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/model/Todo';
import { TodoService } from 'src/app/service/todo.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: ToDo[];

  // faTrashAlt = faTrashAlt;

  constructor(private todoService: TodoService ) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });

  }

  addTodo(todo: ToDo) {
    this.todoService.addTodo(todo);
  }

  deleteTodo(todo: ToDo) {
    this.todoService.removeTodo(todo);
  }

  changeTodoStatus(todo: ToDo) {
    this.todoService.changeStatus(todo);
  }

}
