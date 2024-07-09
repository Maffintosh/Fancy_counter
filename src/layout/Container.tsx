import { ReactNode } from "react";

type ContainerProps = {
  children?: ReactNode;
  variant?: "full-bleed" | "large" | "narrow";
};

export default function Container({
  children,
  variant = "full-bleed",
}: ContainerProps) {
  return <div className={`container ${variant && variant}`}>{children}</div>;
}
