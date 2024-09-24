import { Component, ElementRef, QueryList, viewChild, ViewChildren, viewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { TODO_DATA } from '../assets/todo';
import { NTodo } from './models/todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todoData = TODO_DATA.filter(item => item.id < 2);

  //@viewChild('todoRef', {read : ElementRef}) todo?: ElementRef;

  @ViewChildren('todoRef', {read: ElementRef}) todo?: QueryList<ElementRef>;


  constructor() {
    //console.log(this.todo?.priority);
  }

  getTodoInfo(val: NTodo.TodoData) {
    console.log(val);
  }

  trackByFn(_index: number, item: NTodo.TodoData) {
    return item.id;
  }

  orderData() {
    this.todoData.sort((a, b) => a.priority -  b.priority);
  }

  selectTodo(){
    console.log(this.todo);
   /*this.todo?.changes.suscribe(value s => {
    console.log(values);
   })*/
  }

  addTodo(){
    this.todoData = TODO_DATA.filter(item => item.id < 4);

  }
}