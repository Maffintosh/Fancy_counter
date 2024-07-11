import { useState, useEffect } from "react";
import Container from "./layout/Container";
import Counter from "./components/Counter";
import CountButtons from "./components/CountButtons";
import "./sass/main.scss";

export default function App() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        setCount((prev) => (prev + 1 > 5 ? 5 : prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [count]);

  return (
    <Container width="30rem" alignContent="center" rounded={true} locked={locked}>
      <Counter count={count} setCount={setCount} locked={locked} />
      <CountButtons setCount={setCount} locked={locked} />
    </Container>
  );
}
