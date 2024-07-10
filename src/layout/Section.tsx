import type { CSSProperties, ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  spacer?: string;
};

export default function Section({ children, spacer = "2rem" }: SectionProps) {
  return (
    <section className="section" style={{ "--spacer": spacer } as CSSProperties}>
      {children}
    </section>
  );
}
