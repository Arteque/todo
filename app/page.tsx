import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import Outer from "@/components/shared/Containers/Outer";
import Search from "@/components/Forms/Search";

export default function Home() {
  return (
    <>
      <Section id="herosection">
        <Container>
          <Outer
            border="border-foreground/10"
            className="flex justify-between items-center"
          >
            <h2 className="text-xl uppercase text-foreground/50 font-bold">
              Feature Name
            </h2>
            <Search />
          </Outer>
        </Container>
      </Section>
      <Section className="min-h-[80dvh]">
        <Container>
          <Outer>Item</Outer>
        </Container>
      </Section>
    </>
  );
}
