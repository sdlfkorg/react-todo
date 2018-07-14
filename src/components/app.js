import React, { Component } from "react";
import ToDoList from '../containers/todos';
import AddToDo from '../containers/add-todo';

class App extends Component {
  render() {
    return (
      <div>
      <h3>First page!</h3>
      <AddToDo />
      <ToDoList />
      </div>
    );
  }
}

export default App;
