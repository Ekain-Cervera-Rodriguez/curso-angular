import { Component, EventEmitter, input, Input, Output, OutputEmitterRef} from '@angular/core';
import { NTodo } from '../../models/todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input({required: true}) todoData!: NTodo.TodoData;

  @Input() first!: boolean;

  @Input() last!: boolean;

  @Input() odd!: boolean;

  @Input() even!: boolean;

  @Output() onClickIcon = new EventEmitter<NTodo.TodoData>();
}
