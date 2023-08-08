import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo, deleteTodo } from "../features/todos/todosSlice";
// TODO:
// read data from state
// create a input to add new todo
// button to delete a todo

export default function TodoList() {
  // access todos from Global state
  const todos = useSelector((state) => state.todos);

  // local state for input
  const [text, setText] = useState("");

  // function to dispatch n action
  const dispatch = useDispatch();

  return (
    <div>
      <h1> Todo List</h1>
    {/* CREATE NEW TODO  */}
      <div>
        <label htmlFor="add todo">Add Todo: </label>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && dispatch(addTodo(text))}
          type="text"
          placeholder="add new todo"
          id="add todo"
        />
      </div>
    {/* MAP OVER TODOS  */}
      <div>
        {todos &&
          todos.map((todo) => (
            <div key={todo.id}>
              <h3>{todo.text}</h3>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>delete</button>
            </div>
          ))}
      </div>
    </div>
  );
}
