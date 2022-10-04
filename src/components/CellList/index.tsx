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
      <AddCell nextCellId={cell.id} />
      <CellListItem cell={cell} />
    </Fragment>
  ));

  return (
    <div>
      {renderedCells}
      <AddCell nextCellId={null} forceVisible={renderedCells.length === 0} />
    </div>
  );
};

export default CellList;
