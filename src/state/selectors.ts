import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";

export const UseStatusTag = () => {
  useSelector((state: RootState) => state.filterSlice.statusTag);
}
