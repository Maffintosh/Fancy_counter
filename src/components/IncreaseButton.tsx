import Button from "../shared/Button";
import type { Dispatch, SetStateAction } from "react";

type IncreaseButtonProps = {
  setCount: Dispatch<SetStateAction<number>>;
};

export default function IncreaseButton({ setCount }: IncreaseButtonProps) {
  const handleClick = () => {
    setCount((prev) => {
      return prev + 1;
    }) 
  }

  return <Button value="+" classes="flex-item btn btn-alter" onClick={handleClick} />;
}
