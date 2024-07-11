import type { Dispatch, SetStateAction } from "react";
import { GitHubLogoIcon, MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import FlexContainer from "../layout/FlexContainer";
import Button from "../shared/Button";

type CountButtonsProps = {
  setCount: Dispatch<SetStateAction<number>>;
  locked: boolean;
};

export default function CountButtons({ setCount, locked }: CountButtonsProps) {
  const handleIncrease = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setCount((prev) => (prev + 1 > 5 ? 5 : prev + 1));

    // Fix double state changing in focus
    event.currentTarget.blur();
  };

  const handleDecrease = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setCount((prev) => (prev - 1 < 0 ? 0 : prev - 1));

    // Fix double state changing in focus
    event.currentTarget.blur();
  };

  return (
    <FlexContainer>
      <Button classes="btn btn-alter" onClick={handleDecrease} disabled={locked}>
        <MinusIcon className="count-icon" />
      </Button>
      <a
        className="btn-github"
        href="https://github.com/NerdScriptX?tab=repositories"
        target="_blank"
      >
        <GitHubLogoIcon className="github-icon" />
      </a>
      <Button classes="btn btn-alter" onClick={handleIncrease} disabled={locked}>
        <PlusIcon className="count-icon" />
      </Button>
    </FlexContainer>
  );
}
