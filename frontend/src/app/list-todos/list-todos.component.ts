import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description:string,
    public done: boolean,
    public targetDate: Date
  ){ }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {

   todos = [
    new Todo(1, 'Learn to fight', false, new Date())
  ]

  message:string = ''

  // todo = {
  //   id: 1,
  //   description: 'Learn to fight'
  // }

  constructor (
    private todoService:TodoDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.refreshTodos()
  }

  refreshTodos()
  {
    this.todoService.retrieveAllTodos('ranga').subscribe(
      response =>    this.todos = response
    );
  }
deleteTodo(id:number)
{
  //console.log('delete todo');
  this.todoService.deleteTodo('ranga',id).subscribe(
    response => {this.message = "Delete successful";
    this.refreshTodos();}
  )
}

updateTodo(id:number){
  this.router.navigate(['todos',id]);
}

addTodo(){
  this.router.navigate(['todos',-1]);
}

}


