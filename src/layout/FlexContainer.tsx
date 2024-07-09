import { ReactNode } from "react";

type FlexContainerProps = {
  children?: ReactNode;
  direction?: "row" | "column";
};

export default function FlexContainer({
  children,
  direction = "row",
}: FlexContainerProps) {
  return <div>{children}</div>;
}
