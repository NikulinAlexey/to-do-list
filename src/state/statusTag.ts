import { createSlice } from "@reduxjs/toolkit";

export const statusTag = createSlice({
  name: "currentTag",
  initialState: "all",
  reducers: {
    refreshStatusTag: (_state, action) => {
      return action.payload;
    },
  },
});

export const { refreshStatusTag } = statusTag.actions;

export default statusTag.reducer;
