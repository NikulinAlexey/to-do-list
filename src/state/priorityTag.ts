import { createSlice } from "@reduxjs/toolkit";

export const priorityTag = createSlice({
  name: "priorityTag",
  initialState: "all-priorities",
  reducers: {
    refreshPriorityTag: (state, action) => {
      return action.payload;
    },
  },
});

export const { refreshPriorityTag } = priorityTag.actions;

export default priorityTag.reducer;
