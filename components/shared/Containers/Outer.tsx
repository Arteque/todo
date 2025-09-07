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
      className={`border-1 rounded-[0_0_1rem_0] p-4 ${border ? border : ""} ${
        className ? className : ""
      }`}
      {...props}
      id={id}
    >
      {children}
    </div>
  );
};

export default Outer;
