import { Component } from '@angular/core';
import { ListComponent } from './../list/list.component';
import { FormComponent } from './../form/form.component';
@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [ListComponent, FormComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css',
})
export class WrapperComponent {
  todoList: any[] = [];

  addTodo(newTask: any): void {
    this.todoList.push({ title: newTask.value, marked: false });
    newTask.value = '';
  }
  deleteTodo(index: number): void {
    this.todoList.splice(index, 1);
  }
  markTodo(index: number): void {
    this.todoList[index].marked = !this.todoList[index].marked;
  }
}
