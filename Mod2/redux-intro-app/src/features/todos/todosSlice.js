import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

console.log(nanoid());
// 'dgPXxUz_6fWIQBD8XmiSy'

export const todosSlice = createSlice({
  name: "todos",
  initialState: [
    { id: "1", text: "Learn React", completed: true },
    { id: "2", text: "Learn Redux", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const { payload } = action;
      const newTodo = {
        text: payload,
        completed: false,
        id: nanoid(),
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      const { payload } = action;
      console.log(payload);
    //   state.filter(todo => todo.id !== payload.toString());
      const todoIndexToDelete = state.findIndex((todo) => todo.id === payload);
      state.splice(todoIndexToDelete, 1);
    },
  },
});

// Todo: we need to export our actions creators
export const { addTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
