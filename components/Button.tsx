interface buttonProps {
  className?: string;
}
export function Button({ className }: buttonProps): JSX.Element {
  return <div className={className}>Hello! I am a div</div>;
}
