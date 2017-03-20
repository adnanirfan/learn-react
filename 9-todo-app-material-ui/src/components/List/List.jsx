import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import ActionDone from 'material-ui/svg-icons/action/done';


class TodoList extends Component {

    completeTodo(index) {
        this.props.completeTodo(index);
    }

    getTodoList() {
        console.log(this.props)
        return (
            this.props.todoList.map((item, index) => {
                if (item.done) { return; }
                return (
                    <ListItem
                        key={index}
                        primaryText={item.todo}
                        secondaryText={item.timestamp}
                        rightIconButton={((function (im, ix) {
                            return (!im.done) ? <button onClick={(() => this.completeTodo(ix))}>
                                <ActionDone/>
                                </button> : '';
                        }).bind(this)(item, index))}
                    />
                )
            })
        )
    }
    render() {
        return (
            <div>
                <List>
                    {/*<Subheader inset={false}>All Todos</Subheader>*/}
                    
                    {this.getTodoList()}

                </List>
            </div>
        )
    }
}
export default TodoList;