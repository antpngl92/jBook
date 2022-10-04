import { FC, Fragment } from "react";

import { useTypedSelector } from "hooks/use-typed-selector";
import { CellListItem, AddCell } from "components";
import { ICell } from "state/cell";

const CellList: FC = () => {
  const cells: ICell[] = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id: string) => data[id])
  );

  const renderedCells = cells.map((cell: ICell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));

  return (
    <div>
      <AddCell
        previousCellId={null}
        forceVisible={renderedCells.length === 0}
      />
      {renderedCells}
    </div>
  );
};

export default CellList;
