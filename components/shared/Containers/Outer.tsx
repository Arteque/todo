interface OuterProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
  [key: string]: any;
  border?: string;
}

const Outer = ({
  className,
  children,
  id,
  border = "border-foreground/20",
  ...props
}: OuterProps) => {
  return (
    <div
      className={`border-1 rounded-[.5rem] p-4 ${border} ${className}`}
      {...props}
      id={id}
    >
      {children}
    </div>
  );
};

export default Outer;
