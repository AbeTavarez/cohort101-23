import Todo from "./Todo";

function TodoList(props) {
  const { todos, addTodo, completeTodo, editTodoText, deleteTodo } = props;

  return (
    <div>
      <h1>Create Todo</h1>
      {/* CREATE NEW TODO INPUT  */}
      <input type="text" onKeyDown={(e) => e.key === "Enter" && addTodo(e)} />

    {/* MAPPING OVER THE DATA  */}
      {todos.length ? (
        <>
          <h2>Todos Items</h2>
        {/* PENDING TODOS  */}
          <ul className="todolist">
            {todos
              .filter((item) => !item.completed)
              .map((item) => (
                <Todo
                  key={item.id}
                  todo={item}
                  completeTodo={completeTodo}
                  editTodoText={editTodoText}
                  deleteTodo={deleteTodo}
                />
              ))}
          </ul>

          <h2>Completed Todos</h2>
          {/* COMPELTED TODOS  */}
          <ul className="todolist">
            {todos
              .filter((item) => item.completed)
              .map((item) => (
                <Todo
                  key={item.id}
                  todo={item}
                  completeTodo={completeTodo}
                  editTodoText={editTodoText}
                  deleteTodo={deleteTodo}
                />
              ))}
          </ul>
        </>
      ) : (
        <h2>No Todos</h2>
      )}
    </div>
  );
}

export default TodoList;
