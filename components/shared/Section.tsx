import React from "react";

const Section = ({
  className,
  id,
  children,
  ...props
}: {
  className?: string;
  id?: string;
  children: React.ReactNode;
}) => {
  return (
    <section className={`${className}`} id={id} {...props}>
      {children}
    </section>
  );
};

export default Section;
