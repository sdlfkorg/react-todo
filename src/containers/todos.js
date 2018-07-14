import React, { Component } from "react";
import {connect} from 'react-redux';

class ToDoList extends Component {
  renderTodoList(){
    return this.props.totoList.map(todo => {
      return (
        <div>
          <h6 key={todo.id}>{todo.description}</h6>
        </div>
      );
    })
  }
  render() {
    return (
      <div>
        <h5>The is Todo list Page</h5>
        <ul>
          {this.renderTodoList()}
        </ul>

      </div>
      );
  }
}

function mapStateToProps(state){
  return { totoList: state.totoList};
}



export default connect(mapStateToProps)(ToDoList);
