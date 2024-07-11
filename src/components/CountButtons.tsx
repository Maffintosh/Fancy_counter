import type { Dispatch, SetStateAction } from "react";
import FlexContainer from "../layout/FlexContainer";
import Button from "../shared/Button";

type CountButtonsProps = {
  setCount: Dispatch<SetStateAction<number>>;
};

export default function CountButtons({ setCount }: CountButtonsProps) {
  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <FlexContainer>
      <Button classes="flex-item btn btn-alter" onClick={handleDecrease}>
        -
      </Button>
      <Button classes="flex-item btn btn-alter" onClick={handleIncrease}>
        +
      </Button>
    </FlexContainer>
  );
}
