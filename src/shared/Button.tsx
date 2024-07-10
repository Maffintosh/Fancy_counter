import type { ReactNode, ComponentProps, Dispatch, SetStateAction } from "react";

type ButtonProps = {
  children?: ReactNode;
  value?: ReactNode;
  classes?: string;
} & ComponentProps<"button">;

export default function Button({
  children,
  value,
  classes,
  ...props
}: ButtonProps) {
  return (
    <button className={classes ? classes : ""} {...props}>
      {value ? value : children ? children : ""}
    </button>
  );
}
