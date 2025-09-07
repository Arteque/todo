import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import Outer from "@/components/shared/Containers/Outer";
import Search from "@/components/Forms/Search";

interface HeroProps {
  title: string;
  description?: string;
}

const Hero = ({ title, description }: HeroProps) => {
  return (
    <Section id="herosection">
      <Container>
        <Outer border="border-foreground/10">
          <div
            className={`flex justify-between ${
              description
                ? " items-start border-b border-foreground/10 pb-2 mb-2"
                : ""
            }`}
          >
            <div className="title">
              <h2 className="text-xl uppercase text-foreground/50 font-bold">
                {title}
              </h2>
            </div>
            <Search />
          </div>
          {description && (
            <p className="text-foreground/70 mb-4">{description}</p>
          )}
        </Outer>
      </Container>
    </Section>
  );
};

export default Hero;
