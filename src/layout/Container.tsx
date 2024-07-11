import type { CSSProperties, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  width?: string;
  alignContent?: "left" | "center" | "right";
  rounded?: boolean;
  radius?: string;
  locked: boolean;
};

export default function Container({
  children,
  width,
  alignContent,
  rounded,
  radius = "1rem",
  locked,
}: ContainerProps) {
  return (
    <div
      className={`container ${alignContent ? alignContent : ""} ${locked ? "locked" : ""}`}
      style={
        {
          "--max-width": width,
          "--radius": rounded ? radius : "",
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
