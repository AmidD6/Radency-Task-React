import {combineReducers} from "redux";
// import { TableCategoryReducer } from "./TableCategoryReducer";
import TableMainReducer from "./TableMainReducer";
import TableCategoryReducer from "./TableCategoryReducer";

export const rootReducer = combineReducers({
    TableMainReducer,
    TableCategoryReducer
})

export type RootState = ReturnType<typeof rootReducer>