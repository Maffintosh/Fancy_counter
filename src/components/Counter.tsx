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
        <h2>Fancy Counter</h2>
        <p>{count}</p>
        <Button classes="btn btn-clear" onClick={handleClick}>
          <ResetIcon style={{width: "3rem", height: "3rem"}}/>
        </Button>
      </Stack>
    </Section>
  );
}
