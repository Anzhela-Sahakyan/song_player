import { IButtonProps } from "../../types/types";

export default function Button({
  label,
  onClick,
  children,
  className,
}: IButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      <span> {label}</span>
      <div>{children}</div>
    </button>
  );
}
