import { useState } from "react";
import Counter from "./components/Counter";
import Container from "./layout/Container";
import FlexContainer from "./layout/FlexContainer";
import IncreaseButton from "./components/IncreaseButton";
import DecreaseButton from "./components/DecreaseButton";
import "./sass/main.scss";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <Container width="35rem" alignContent="center" rounded={true}>
      <Counter count={count} setCount={setCount} />
      <FlexContainer>
        <IncreaseButton setCount={setCount} />
        <DecreaseButton setCount={setCount} />
      </FlexContainer>
    </Container>
  );
}
