import React, { Component } from 'react';


class List extends Component {

    completeTodo(index){
        this.props.completeTodo(index);
    }

    getTodoList() {
        console.log(this.props)
        return (
            this.props.todoList.map((item, index) => {
                if (item.done) { return; }
                return (
                    <tr key={index}>

                        <td>{item.todo}</td>
                        <td><small> {item.timestamp}</small></td>

                        <td>
                            {((function (im, ix) {
                                return (!im.done) ? <button onClick={(() => this.completeTodo(ix))}>Done</button> : '';
                            }).bind(this)(item, index))}
                        </td>
                    </tr>
                )
            })
        )
    }
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>

                <table>
                    <thead>
                        <th>Todo</th>
                        <th>Added At</th>
                        <th>Done</th>
                    </thead>
                    <tbody>
                        {this.getTodoList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default List;