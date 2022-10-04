import { ActionType } from "state/action-types";
import {
  IUpdateCellAction,
  IDeleteCellAction,
  IMoveCellAction,
  IInsertCellAfterAction,
  TDirection,
} from "state/actions";
import { TCellTypes } from "state/cell";

export const updateCell = (id: string, content: string): IUpdateCellAction => {
  return {
    type: ActionType.UPDATE_CELL,
    payload: {
      id,
      content,
    },
  };
};
export const deleteCell = (id: string): IDeleteCellAction => {
  return {
    type: ActionType.DELETE_CELL,
    payload: id,
  };
};
export const moveCell = (
  id: string,
  direction: TDirection
): IMoveCellAction => {
  return {
    type: ActionType.MOVE_CELL,
    payload: {
      id,
      direction,
    },
  };
};
export const insertCellAfter = (
  id: string | null,
  cellType: TCellTypes
): IInsertCellAfterAction => {
  return {
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
      id,
      type: cellType,
    },
  };
};
