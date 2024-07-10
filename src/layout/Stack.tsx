import type { CSSProperties, ReactNode } from "react";

type StackProps = {
  children: ReactNode;
  spacer?: string;
};

export default function Stack({ children, spacer = "1.5rem" }: StackProps) {
  return (
    <div className="stack" style={{ "--spacer": spacer } as CSSProperties}>
      {children}
    </div>
  );
}
