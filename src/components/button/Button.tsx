interface IButtonProps {
  children: React.ReactNode;
  label: string;
  className?: string;
  onClick: () => void;
}

export default function HeaderButton({
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
