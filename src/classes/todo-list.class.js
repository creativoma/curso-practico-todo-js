import { Todo } from './todo.class';

// Las clases se escriben con UpperCamelCase
export class TodoList {

    constructor( ){
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){
        this.todos = this.todos.filter(todo => todo.id != id)
        this.guardarLocalStorage();
    }

    marcarCompletado (id){
        for (const todo of this.todos){
            console.log(id, todo.id);

            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){   
        this.todos = this.todos.filter(todo => !todo.completado)
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage(){
        // // Forma larga de hacerlo        
        // if (localStorage.getItem('todo')){
            
        //     this.todos = JSON.parse(localStorage.getItem('todo'));

        // } else {
        //     this.todos = [];
        // }

        // Forma de hacerlo con el operador Ternario
        this.todos = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : []; 

        this.todos = this.todos.map(obj => Todo.fromJson(obj));
        // lo de arriba se puede escribir de la siguiente manera, porque hay un solo argumento:
        // this.todos = this.todos.map(Todo.fromJson);
    }

}