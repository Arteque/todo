const Section = ({className, children, ...props}:{
    className?: string;
    children: React.ReactNode;
}) => {
  return (
    <section className={`${className}`} {...props}>
      {children}
    </section>
  )
}

export default Section