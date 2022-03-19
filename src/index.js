import './styles.css';

import { Todo, TodoList } from './classes' // Esta es la importación del index de las referencias de clases.
import { crearTodoHTML } from './js/componentes';

export const todoList = new TodoList();

// // Creando un Todo manual 

// const tarea = new Todo('Aprender Javascript!');
// todoList.nuevoTodo(tarea);
// console.log(todoList);
// crearTodoHTML(tarea);


// // Ejemplo de LocalStorage y SessionStorage

// localStorage.setItem('mi-key','ABC1234');
// sessionStorage.setItem('mi-key','ABC1234');

// setTimeout(() => {
//     localStorage.removeItem('mi-key');
//     sessionStorage.removeItem('mi-key');
// }, 2500);

todoList.todos.forEach(todo => crearTodoHTML(todo));
// lo de arriba se puede escribir de la siguiente manera, porque hay un solo argumento:
// todoList.todos.forEach(crearTodoHTML);

console.log('todos', todoList.todos);

// // Lo de abajo es para comprobar que se crean las intancias a partir de los valores
// // que se guardan en el localStorage, y se les puede pasar sus metodos.
// todoList.todos[2].imprimirClase();
