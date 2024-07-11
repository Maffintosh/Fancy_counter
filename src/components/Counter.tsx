import type { Dispatch, SetStateAction } from "react";
import { ResetIcon } from "@radix-ui/react-icons";
import Section from "../layout/Section";
import Stack from "../layout/Stack";
import Button from "../shared/Button";

type CounterProps = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

export default function Counter({ count, setCount }: CounterProps) {
  const handleClick = () => setCount(0);

  return (
    <Section spacer="6rem">
      <Stack spacer="2rem">
        <h1>{count === 5 ? "Buy Pro version" : "Fancy Counter"}</h1>
        <p>{count}</p>
        <Button classes="btn btn-clear" onClick={handleClick}>
          <ResetIcon className="reset-icon"/>
        </Button>
      </Stack>
    </Section>
  );
}
