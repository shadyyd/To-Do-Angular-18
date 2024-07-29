import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Output() newTodo = new EventEmitter<any>();

  addTodo(todo: any) {
    if (todo.value.trim()) {
      this.newTodo.emit(todo);
    }
  }
}
