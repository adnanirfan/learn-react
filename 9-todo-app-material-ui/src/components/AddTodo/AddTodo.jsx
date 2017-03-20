import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ActionSend from 'material-ui/svg-icons/content/add-circle-outline';

class AddTodo extends Component {

    state = {
        todo: ''
    }
    onChangeTodo(e) {
        this.setState({ todo: e.target.value });
    }
    render() {


        return (
            <div className=" flex-space-between flex-direction-">
                
                <TextField
                    value={this.state.todo}
                    onChange={this.onChangeTodo.bind(this)}
                    defaultValue=""
                    floatingLabelText="Todo"
                    className="flex-8"
                />

                <RaisedButton
                    className="flex-2"
                    primary={true}
                    label="Add"
                    icon={<ActionSend />}
                    onClick={this.props.addTodo.bind(this, this.state.todo)}
                />

            </div>
        )
    }
}
export default AddTodo;