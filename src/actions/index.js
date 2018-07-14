export const ADD_TODO = 'add_todo';

export function addTodo(values){
  return {
    type: ADD_TODO,
    payload: {
      description: values
    }
  }
}