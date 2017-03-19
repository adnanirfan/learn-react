import React, { Component } from 'react';
import Header from './../Header/Header'
// import Footer from './../Footer/Footer'
import './App.css';

class App extends Component {


  // state = {
  //   title: 'Todo App',
  //   todoList: [
  //     { todo: 'Wa  Wa', timestamp: 2432343243424 },
  //     { todo: 'Ma Ma', timestamp: 2432343243424 },
  //     { todo: 'Kia baat ahai', timestamp: 2432343243424 },
  //     { todo: 'bohto aala', timestamp: 2432343243424 }]
  // }

  completeTodo(index) {
    console.log(index);
    console.log(this.state.todoList[index]);
    let todoList = this.state.todoList;
    todoList[index]['done'] = true;
    todoList[index]['doneAt'] = new Date().getTime();
    this.setState({ todoList });
  }
  constructor() {
    super();

    this.state = {
      title: 'Todo App',
      todoList: [
        { done: false, todo: 'Wa  Wa', timestamp: 2432343243424 },
        { done: false, todo: 'Ma Ma', timestamp: 2432343243424 },
        { done: true, todo: 'Kia baat ahai', timestamp: 2432343243424, doneAt:2432343243424 },
        { done: false, todo: 'bohto aala', timestamp: 2432343243424 }]
    }
    this.completeTodo = this.completeTodo.bind(this);
  }

  addTodo() {
    let todoList = this.state.todoList;
    todoList.push({ todo: this.state.todo, timestamp: new Date().getTime() });
    this.setState({ todoList });
  }

  getCompletedTodoList() {
    return (
      this.state.todoList.map((item, index) => {
        if (!item.done) { return; }
        return (
          <tr key={index}>

            <td>{item.todo}</td>
            <td><small> {item.timestamp}</small></td>
            <td><small> {item.doneAt}</small></td>

            {/*<td>
              {(function (im, ix) {
                return (!im.done) ? <button onClick={() => this.completeTodo(ix)}>Done</button> : '';
              }(item, index))}
            </td>*/}
          </tr>
        )
      })
    )
  }
  getTodoList() {
    return (
      this.state.todoList.map((item, index) => {
        if (item.done) { return; }
        return (
          <tr key={index}>

            <td>{item.todo}</td>
            <td><small> {item.timestamp}</small></td>

            <td>
              {((function (im, ix) {
                return (!im.done) ? <button onClick={(() => this.completeTodo(ix)).bind(this)}>Done</button> : '';
              }).bind(this)(item, index))}
            </td>
          </tr>
        )
      })
    )
  }
  onChangeTodo(e) {
    this.setState({ todo: e.target.value });
    console.log(this.state.todo);
  }
  render() {
    return (
      <div className="App">
        <Header title={this.state.title} />
        {/*<p className="App-intro">*/}
        <div className="flex flex-space-between flex-space-around">
          {/*<div className="flex-1">*/}
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
          {/*</div>

          <div className="flex-1">*/}
            <table>
              <thead>
                <th>Todo</th>
                <th>Added At</th>
                <th>Done At</th>
              </thead>
              <tbody>
                {this.getCompletedTodoList()}
              </tbody>
            </table>
          {/*</div>*/}
        </div>
        {/*</p>*/}
        {/*<Footer />*/}

        <div>
          <input type="text" value={this.todo} onChange={this.onChangeTodo.bind(this)} />
          <button onClick={this.addTodo.bind(this)}>Add Todo</button>
        </div>
      </div>
    );
  }
}

export default App;
