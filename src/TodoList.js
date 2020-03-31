import React from 'react'
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';
import './Todo.css';

export class TodoList extends React.Component {

    state = {
        todos: []
    }

    addTodo = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    deleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }

    updateTodo = (id, updatedTask) => {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
               return {...todo, task: updatedTask}
            }
            return todo;
        });
        this.setState({todos: updatedTodos})
    }

    toggleCompletion = (id) => {
        const completedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        })
        this.setState({todos: completedTodos})
    }

    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo 
            key={todo.id} 
            id={todo.id} 
            task={todo.task} 
            completed={todo.completed}
            deleteTodo={this.deleteTodo} 
            updateTodo={this.updateTodo}
            toggleTodo={this.toggleCompletion}/>
        })
        return (
            <div className="TodoList">
                <h1>Todo List <span>Made with React</span> </h1>
                <div>
                    {todos}
                </div>
                <NewTodoForm addTodo={this.addTodo}/>
            </div>
        )
    }
}

export default TodoList
