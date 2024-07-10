import type { Dispatch, SetStateAction } from "react";
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
        <Button onClick={handleClick} classes="btn-clear">Clear</Button>
      </Stack>
    </Section>
  );
}
