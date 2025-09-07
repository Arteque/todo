import Hero from "@/components/Sections/Hero";

import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import Outer from "@/components/shared/Containers/Outer";

export default function Home() {
  return (
    <>
      <Hero
        title="Todo App"
        description="A simple todo app built with Next.js, TypeScript, and Tailwind"
      />
      <Section className="min-h-[80dvh]">
        <Container>
          <Outer>Item</Outer>
        </Container>
      </Section>
    </>
  );
}
