import { useState } from "react";
import Container from "./layout/Container";
import Counter from "./components/Counter";
import CountButtons from "./components/CountButtons";
import "./sass/main.scss";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <Container width="30rem" alignContent="center" rounded={true}>
      <Counter count={count} setCount={setCount} />
      <CountButtons setCount={setCount} />
    </Container>
  );
}
