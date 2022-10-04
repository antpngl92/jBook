import { FC } from "react";

import { ActionButton } from "components";
import { useActions } from "hooks/use-actions";
import "./index.css";

interface Props {
  id: string;
}

const ActionBar: FC<Props> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div className="action-bar">
      <ActionButton
        action={() => moveCell(id, "up")}
        icon={"fa-arrow-up"}
        buttonSize={"is-small"}
      />
      <ActionButton
        action={() => moveCell(id, "down")}
        icon={"fa-arrow-down"}
        buttonSize={"is-small"}
      />
      <ActionButton
        action={() => deleteCell(id)}
        icon={"fa-times"}
        buttonSize={"is-small"}
      />
    </div>
  );
};

export default ActionBar;
