import Section from "./Section"
import Container from "./Container"
const HeroSection = ({ children }:{children: React.ReactNode}) => {
  return (
    <Section>
        <Container className={`min-h-[25dvh] bg-background text-foreground flex flex-col gap-5 items-center justify-center`}>
            {children}
        </Container>
    </Section>
  )
}

export default HeroSection