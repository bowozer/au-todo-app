import { Todo } from './todo';

export class App {
  message = 'Hello World!';
  heading = 'Todos';
  todoList: Todo[] = [];
  todoDesc = '';

  addTodo() {
    if (this.todoDesc) {
      this.todoList.push(new Todo(this.todoDesc));
      this.todoDesc = '';
    }
  }

  removeTodo(todo) {
    let index = this.todoList.indexOf(todo);
    if (index !== -1) {
      this.todoList.splice(index, 1);
    }
  }
}
