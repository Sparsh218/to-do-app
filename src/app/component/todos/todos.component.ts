import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/Todo';
import { TodoService } from 'src/app/service/todo.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Task[];

  // faTrashAlt = faTrashAlt;

  constructor(private todoService: TodoService ) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
      console.log(this.todos);
    });

  }

  addTodo(todo: Task) {
    this.todoService.addTodo(todo).subscribe();
  }

  deleteTodo(todo: Task) {
    this.todoService.removeTodo(todo).subscribe(output => {
      console.log(output);
    });
  }

  changeTodoStatus(todo: Task) {
    this.todoService.changeStatus(todo).subscribe();
  }

}
