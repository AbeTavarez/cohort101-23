import { useState } from "react";

function Todo(props) {
  const { todo, completeTodo, editTodoText, deleteTodo } = props;

  const [showInput, setShowInput] = useState(false);

  return (
    <div>
      {/* TODO TEXT WITH THE ON CLICK  */}
      <li onClick={() => setShowInput(!showInput)}>{todo.text}</li>
      {/* EDIT TEXT INPUT  */}
      <input
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            editTodoText(todo.id, e);
            setShowInput(false);
          }
        }}
        style={{ display: showInput ? "block" : "none" }}
      />

        {/* CHECKBOX INPUT  */}
      <label>
        Complete
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => completeTodo(todo.id)}
        />
      </label>
        {/* DELETE BUTTON  */}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default Todo;
