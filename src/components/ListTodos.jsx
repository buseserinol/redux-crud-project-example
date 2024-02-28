import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const ListTodos = () => {
  const state = useSelector((store) => store.todoReducer);
  // console.log(state);
  return (
    <div>
      {state.todos.map((todo) => (
        <div>
          <TodoCard key={todo.id} todo={todo} />
        </div>
      ))}
    </div>
  );
};

export default ListTodos;
