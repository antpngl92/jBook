import { FC } from "react";

interface Props {
  action: () => void;
  icon: string;
  buttonSize: string;
  buttonText?: string;
}

const ActionButton: FC<Props> = ({ action, icon, buttonSize, buttonText }) => {
  const buttonClass = `button is-primary ${buttonSize}`;

  return (
    <button onClick={action} className={"button is-primary " + buttonClass}>
      <span className="icon">
        <i className={"fas " + icon}></i>
      </span>
      {buttonText && <span>{buttonText}</span>}
    </button>
  );
};

export default ActionButton;
