import type { Dispatch, SetStateAction } from "react";
import { ResetIcon } from "@radix-ui/react-icons";
import Section from "../layout/Section";
import Stack from "../layout/Stack";
import Button from "../shared/Button";

type CounterProps = {
  count: number;
  locked: boolean;
  setCount: Dispatch<SetStateAction<number>>;
};

export default function Counter({ count, locked, setCount }: CounterProps) {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setCount(0);

    // Fix double state changing in focus
    event.currentTarget.blur();
  };

  return (
    <Section spacer="6rem">
      <Stack spacer="2rem">
        <h1>{locked ? "Buy Pro version" : "Fancy Counter"}</h1>
        <p>{count}</p>
        <Button classes="btn btn-clear" onClick={handleClick}>
          <ResetIcon className="reset-icon" />
        </Button>
      </Stack>
    </Section>
  );
}
