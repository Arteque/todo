interface SmallProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

const Small = ({ children, className, ...props }: SmallProps) => {
  return (
    <div
      className={`w-10 h-10 rounded-full overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Small;
