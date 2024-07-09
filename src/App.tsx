import { useState } from "react";
import Counter from "./components/Counter";
import Container from "./layout/Container";
import FlexContainer from "./layout/FlexContainer";
import Button from "./shared/Button";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <Counter count={count}/>  
      <FlexContainer>
        <Button />
        <Button />
      </FlexContainer>
    </Container>
  )
}
