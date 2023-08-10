import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: [
    { id: "1", title: "First Post!", content: "Hello!" },
    { id: "2", title: "Second Post", content: "More text" },
  ],
  reducers: {
    addPost: (state, action) => {
        console.log("FROM REDUCER ", state);
        const { payload } = action;
        state.push(payload);
    },
    editPost: (state, action) => {
       const {payload} = action;
       const indexOfPost = state.findIndex(post => post.id === payload.id);
    //    state[indexOfPost] = payload;
       state.splice(indexOfPost, 1, payload);
    }
  },
});

// actions
export const {addPost, editPost} = postsSlice.actions;

// reducer
export default postsSlice.reducer;
