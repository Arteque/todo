import Container from "./Container";

interface FooterProps {
  className?: string;
  children: React.ReactNode | string;
}

const Footer = ({ className, children, ...props }: FooterProps) => {
  return (
    <footer className={`bg-background-100  ${className}`} {...props}>
      <Container>{children}</Container>
    </footer>
  );
};

export default Footer;
