import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions'

class AddToDo extends Component{
  state = {
    term: ""
  }
  onInputChange = (e) => {
    this.setState({term: e.target.value});
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.term){
      this.props.addTodo(this.state.term);
      this.setState({term: ""});
    }

  } 
  render(){
    return (
      <div>
        <h3>bar will place here~</h3>
        <form onSubmit={this.onFormSubmit}>
          <input 
            placeholder="input your todo~"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </form>
      </div>
      );
  }
}
export default connect(null, {addTodo})(AddToDo);