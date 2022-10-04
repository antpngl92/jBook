import { FC } from "react";

import { useActions } from "hooks/use-actions";
import { ActionButton } from "components";
import "./index.css";

interface Props {
  nextCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: FC<Props> = ({ nextCellId, forceVisible }) => {
  const { insertCellBefore } = useActions();

  return (
    <div className={`add-cell ${forceVisible && "force-visible"}`}>
      <div className="add-buttons">
        <ActionButton
          action={() => insertCellBefore(nextCellId, "code")}
          icon={"fa-plus"}
          buttonSize={"is-rounded is-small"}
          buttonText="Code"
        />
        <ActionButton
          action={() => insertCellBefore(nextCellId, "text")}
          icon={"fa-plus"}
          buttonSize={"is-rounded is-small"}
          buttonText="Text"
        />
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default AddCell;
