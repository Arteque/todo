interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ className, children, ...props }: ContainerProps) => {
  return (
    <div className={`container px-4 mx-auto ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
