import { createSlice } from "@reduxjs/toolkit";

const filterTagsInitial = {
  priorityTag: {
    current: "",
  },
  statusTag: {
    current: "",
  },
};

export const filterSlice = createSlice({
  name: "filterTags",
  initialState: filterTagsInitial,
  reducers: {
    refreshPriorityTag: (_state, { payload }) => {
      return { ..._state, priorityTag: payload };
    },
    refreshStatusTag: (_state, { payload }) => {
      return { ..._state, statusTag: payload };
    },
  },
});

export const { refreshPriorityTag, refreshStatusTag } = filterSlice.actions;

export default filterSlice.reducer;
