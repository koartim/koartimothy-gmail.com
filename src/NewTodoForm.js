import React from 'react'
import uuid from 'uuid/v4';
import './NewTodoForm.css';

class NewTodoForm extends React.Component {

    state = {
        task: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo({...this.state, id: uuid(), completed: false});
        this.setState({task: ""});
    }

    render() {
        return (
            <div>
                <form className="NewTodoForm" onChange={e => this.handleChange(e)} onSubmit={e => this.handleSubmit(e)}>
                
                        <label htmlFor="task"></label>
                        <input className="NewTodoForm" type="text" name="task" placeholder="add task"/>
                
                        <button className="NewTodoForm button">
                            <i class="fas fa-plus" />
                        </button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm
