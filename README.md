# Fancy Counter App

## Project's purposes:

- Mastering of creating generic layout components.
- Use Typescript with React Hooks and asign props types in various situations.
- Creating application structure.

## Intresting examples application of types:

- Intersection type alias with ComponentProps which one accepts generic type of any
html tag and allow you set any related attribute as props.

```tsx
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
```

- Declaration custom-property in tsx.

```tsx
export default function Section({ children, spacer = "2rem" }: SectionProps) {
  return (
    <section className="section" style={{ "--spacer": spacer } as CSSProperties}>
      {children}
    </section>
  );
}
```
