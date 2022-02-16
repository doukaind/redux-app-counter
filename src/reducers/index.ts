import { combineReducers } from "@reduxjs/toolkit";
import { decrease, increase } from "../actions";

const counterReducer = (value = 0, action: Record<string, any>) => {
  if (action.type === "INCREMENT") {
    return value++;
  } else if (action.type === "DECREMENT") {
    return value--;
  }
  return value;
};

export default combineReducers({ counterReducer });
