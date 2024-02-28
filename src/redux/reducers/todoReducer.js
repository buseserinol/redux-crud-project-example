import { actionTypes } from "../actionTypes/actionTypes";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.ADD:
      //yeni todoyu eskilerin arasına ekle
      const tempTodos = state.todos.concat(action.payload);
      //state'i güncelle
      return {
        todos: tempTodos,
      };

    case actionTypes.DELETE:
      const filtred = state.todos.filter((todo) => todo.id !== action.payload);
      return {
        todos: filtred,
      };

    case actionTypes.UPDATE:
      // dizideki eski todo ile action'un payload'ı ile gelen todoyu yer değiştir
      const updated = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return {
        todos: updated,
      };

    case actionTypes.SET:
      return { todos: action.payload };

    default:
      return state;
  }
};

export default todoReducer;
