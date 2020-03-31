import React from 'react'
import "./TodoList.css";

class Todo extends React.Component {

    state = {
        isEditing: false,
        task: this.props.task,
    }

    handleDelete = () => {
        this.props.deleteTodo(this.props.id)
    }

    toggleEditForm = () => {
        this.setState({ isEditing: !this.state.isEditing })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleUpdate = (e) => {
        e.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task)
        this.toggleEditForm();
    }

    handleToggle = (e) => {
        this.props.toggleTodo(this.props.id)
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
               <div className="Todo">
                   <form onSubmit={e => this.handleUpdate(e)} onChange={e => this.handleChange(e)}>
                       <input type="text" name="task" value={this.state.task}/>
                       <button>Save</button>
                   </form>
               </div> 
            )
        } else {
            result = (
            <div className="Todo">
                    <li onClick={this.handleToggle} className={this.props.completed ? 'Todo-task completed' : 
                    "Todo-task"}>{this.props.task}</li>
                    <div className="Todo-buttons">
                    <button onClick={this.toggleEditForm}>
                        <i class='fas fa-pen' />
                    </button>
                    <button onClick={this.handleDelete}>
                        <i class='fas fa-trash'/>
                    </button>
                    </div>
            </div>
            )
        }
        return (
            result
        );
    }
}

export default Todo
