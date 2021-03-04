import React, { useState } from "react";

interface ButtonTwoStepClickProps {
  onClick?: () => {};
  name: string;
}

const stages = {
  unactive: 0,
  waitingClick: 1,
};

export const ButtonTwoStepClick: React.FC<ButtonTwoStepClickProps> = ({
  name,
  onClick = () => {},
}) => {
  const [stage, setStage] = useState<number>(stages.unactive);

  const handleClick = () => {
    switch (stage) {
      case stages.unactive:
        setStage(stages.waitingClick);
        break;
      case stages.waitingClick:
        onClick();
        setStage(stages.unactive);
        break;
      default:
        return;
    }
  };

  return (
    <button onClick={handleClick} data-testid="button-two-step-click">
      {stage === stages.waitingClick ? "confirm" : name}
    </button>
  );
};
