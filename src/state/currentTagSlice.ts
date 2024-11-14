import { createSlice } from "@reduxjs/toolkit";

export const currentTag = createSlice({
  name: "currentTag",
  initialState: 'all',
  reducers: {
    refreshTag: (state, action) => {
      return action.payload;
    },
  },
});

export const { refreshTag } = currentTag.actions;

export default currentTag.reducer;
