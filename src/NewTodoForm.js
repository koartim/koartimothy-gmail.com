import React from 'react'
import uuid from 'uuid/v4';

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
                <form onChange={e => this.handleChange(e)} onSubmit={e => this.handleSubmit(e)}>
                    <div>
                        <button>Add</button>
                    </div>
                    <div>
                    <label htmlFor="task"></label>
                    <input type="text" name="task" placeholder="add task"/>
                    </div><br/>
                </form>
            </div>
        )
    }
}

export default NewTodoForm
