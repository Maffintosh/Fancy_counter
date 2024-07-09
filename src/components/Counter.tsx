import Button from "../shared/Button";

type CounterProps = {
  count: number;
};

export default function Counter({ count }: CounterProps) {
  return (
    <>
      <p>Fancy Counter</p>
      <p>{count}</p>
      <Button>Clear</Button>
    </>
  );
}
