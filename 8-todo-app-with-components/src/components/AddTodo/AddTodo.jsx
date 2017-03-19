import React, { Component } from 'react';
class AddTodo extends Component {

    state = {
        todo: ''
    }
    onChangeTodo(e) {
        this.setState({ todo: e.target.value });
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.todo} onChange={this.onChangeTodo.bind(this)} />
                <button onClick={this.props.addTodo.bind(this, this.state.todo)}>Add Todo</button>
            </div>
        )
    }
}
export default AddTodo;