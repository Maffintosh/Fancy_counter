import type { CSSProperties, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  width?: string;
  alignContent?: "left" | "center" | "right";
  rounded?: boolean;
  radius?: string;
};

export default function Container({
  children,
  width,
  alignContent,
  rounded,
  radius = "1rem",
}: ContainerProps) {
  return (
    <div
      className={`container ${alignContent ? alignContent : ""}`}
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
