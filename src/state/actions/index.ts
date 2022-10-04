import { ActionType } from "state/action-types";
import { TCellTypes } from "state/cell";

export type TDirection = "up" | "down";
export interface IMoveCellAction {
  type: ActionType.MOVE_CELL;
  payload: {
    id: string;
    direction: TDirection;
  };
}

export interface IDeleteCellAction {
  type: ActionType.DELETE_CELL;
  payload: string;
}

export interface IInsertCellBeforeAction {
  type: ActionType.INSERT_CELL_BEFORE;
  payload: {
    id: string | null;
    type: TCellTypes;
  };
}

export interface IUpdateCellAction {
  type: ActionType.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  };
}

export type TAction =
  | IMoveCellAction
  | IDeleteCellAction
  | IInsertCellBeforeAction
  | IUpdateCellAction;
