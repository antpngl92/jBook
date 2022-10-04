import { combineReducers } from "redux";
import cellsReducer from "state/reducers/cellsReducer";

const reducers: any = combineReducers({
  cells: cellsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
