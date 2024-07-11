import type { Dispatch, SetStateAction } from "react";
import { GitHubLogoIcon, MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import FlexContainer from "../layout/FlexContainer";
import Button from "../shared/Button";

type CountButtonsProps = {
  setCount: Dispatch<SetStateAction<number>>;
};

export default function CountButtons({ setCount }: CountButtonsProps) {
  const handleIncrease = () => {
    setCount((prev) => {
      if (prev + 1 > 5) {
        return 5;
      } else {
        return prev + 1;
      }
    });
  };

  const handleDecrease = () => {
    setCount((prev) => {
      if (prev - 1 < 0) {
        return 0;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <FlexContainer>
      <Button classes="flex-item btn btn-alter" onClick={handleDecrease}>
        <MinusIcon className="count-icon" />
      </Button>
      <a
        className="flex-item btn-github"
        href="https://github.com/NerdScriptX?tab=repositories"
        target="_blank"
      >
        <GitHubLogoIcon className="github-icon" />
      </a>
      <Button classes="flex-item btn btn-alter" onClick={handleIncrease}>
        <PlusIcon className="count-icon" />
      </Button>
    </FlexContainer>
  );
}
