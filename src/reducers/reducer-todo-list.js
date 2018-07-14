import { ADD_TODO} from '../actions';

export default function (state = initTodos, action){
  switch (action.type){
    case ADD_TODO:
      var item = action.payload;
      item['id'] = state.length + 1;
      return [...state, item];

    default:
      return state;
  }
  
}

const initTodos = [
  {
    id: 1,
    description: "buy a coffee"
  },
  {
    id: 2,
    description: "wirte some code"
  },
  {
    id: 3,
    description: "find a hobby"
  }
];