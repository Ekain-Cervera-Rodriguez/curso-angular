import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { TODO_DATA } from  '../assets/todo';
import { NTodo } from './models/todo.model';
import { CommonModule, registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';

registerLocaleData(es);
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    TodoComponent,
    CommonModule
  ],
  providers:[{provide: LOCALE_ID, useValue: 'es'}],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todoData = TODO_DATA;

  constructor() {}

  getTodoInfo(vaL: NTodo.TodoData) {
    console.log(vaL);
  }

  trackByFn(_index: number, item: NTodo.TodoData){
    return item.id;
  }
  
  orderData(){
    this.todoData.sort((a, b) => a.priority - b.priority);
  }
}
