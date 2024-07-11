import type { ReactNode, ComponentProps } from "react";

type ButtonProps = {
  children?: ReactNode;
  classes?: string;
} & ComponentProps<"button">;

export default function Button({
  children,
  classes,
  ...props
}: ButtonProps) {
  return (
    <button className={classes ? classes : ""} {...props}>
      {children}
    </button>
  );
}
