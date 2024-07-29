import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() todos: any[] = [];
  @Output() todoDeleted = new EventEmitter<number>();
  @Output() todoMark = new EventEmitter<number>();

  deleteTodo(index: number) {
    this.todoDeleted.emit(index);
  }
  markTodo(index: number) {
    this.todoMark.emit(index);
  }
}
