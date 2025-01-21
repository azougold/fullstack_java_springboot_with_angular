import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  id:number = 0
  todo = new Todo(this.id, '', false, new Date())

  constructor (
    private todoService:TodoDataService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    console.log('error');
   this.getTodo()
  }

  getTodo()
  {
    this.id = this.route.snapshot.params['id'];
    if(this.id!=-1){
      this.todoService.retrieveTodo('ranga',this.id).subscribe(
      data =>   {
        console.log(data);
        this.todo = data
      } 
    );
    }
    
  }
  saveTodo()
  {
    if(this.id==-1){
      this.todoService.createTodo('ranga', this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(["todos"]);
        }
      )
    } else {
      this.todoService.updateTodo('ranga', this.id, this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(["todos"]);
        }
      )
    }
   
  }
}
