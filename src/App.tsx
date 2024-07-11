import { useState } from "react";
import Counter from "./components/Counter";
import Container from "./layout/Container";
import "./sass/main.scss";
import CountButtons from "./components/CountButtons";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <Container width="30rem" alignContent="center" rounded={true}>
      <Counter count={count} setCount={setCount} />
      <CountButtons setCount={setCount} />
    </Container>
  );
}
