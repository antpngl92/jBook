import { FC } from "react";

import { useActions } from "hooks/use-actions";
import { ActionButton } from "components";
import "./index.css";

interface Props {
  previousCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: FC<Props> = ({ previousCellId, forceVisible }) => {
  const { insertCellAfter } = useActions();

  return (
    <div className={`add-cell ${forceVisible && "force-visible"}`}>
      <div className="add-buttons">
        <ActionButton
          action={() => insertCellAfter(previousCellId, "code")}
          icon={"fa-plus"}
          buttonSize={"is-rounded is-small"}
          buttonText="Code"
        />
        <ActionButton
          action={() => insertCellAfter(previousCellId, "text")}
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
