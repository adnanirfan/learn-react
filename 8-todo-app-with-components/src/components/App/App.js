import React, { Component } from 'react';
import Header from './../Header/Header'
import List from './../List/List'
import AddTodo from './../AddTodo/AddTodo'
// import Footer from './../Footer/Footer'
import './App.css';

class App extends Component {


  completeTodo(index) {
    console.log(this.state.todoList[index]);
    let todoList = this.state.todoList;
    todoList.splice(index, 1);

    this.setState({ todoList });
  }
  constructor() {
    super();

    this.state = {
      title: 'Todo App',
      todoList: [
        { done: false, todo: 'Wa  Wa', timestamp: 2432343243424 },
        { done: false, todo: 'Ma Ma', timestamp: 2432343243424 },
        { done: true, todo: 'Kia baat ahai', timestamp: 2432343243424, doneAt: 2432343243424 },
        { done: false, todo: 'bohto aala', timestamp: 2432343243424 }]
    }
    
    this.completeTodo = this.completeTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(newTodo) {
    let todoList = this.state.todoList;
    console.log(todoList)
    todoList.push({ todo: newTodo, timestamp: new Date().getTime() });
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
          </tr>
        )
      })
    )
  }

  render() {
    return (
      <div className="App">
        <Header title={this.state.title} />
        <div className="flex flex-space-around">

          <List todoList={this.state.todoList} completed={false} title='Todo List' completeTodo={this.completeTodo}/>

        </div>

        <AddTodo addTodo={this.addTodo}></AddTodo>
      </div>
    );
  }
}

export default App;
