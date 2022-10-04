import { FC } from "react";

import { ICell } from "state/cell";
import { CodeCell, TextEditor, ActionBar } from "components";
import "./index.css";

interface Props {
  cell: ICell;
}

const CellListItem: FC<Props> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === "code") {
    child = (
      <>
        <div className="action-bar-wrapper">
          <ActionBar id={cell.id} />
        </div>
        <CodeCell cell={cell} />
      </>
    );
  } else {
    child = (
      <>
        <TextEditor cell={cell} />
        <ActionBar id={cell.id} />
      </>
    );
  }
  return <div className="cell-list-item">{child}</div>;
};

export default CellListItem;
