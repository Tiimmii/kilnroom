import PageHero from "@/components/PageHero";
import Statement from "@/components/Statement";
import Shutter from "@/components/Shutter";
import Firing from "@/components/Firing";
import Shelf from "@/components/Shelf";
import Classes from "@/components/Classes";
import Questions from "@/components/Questions";
import { site, heroImages } from "@/data/site";

export default function Home() {
  return (
    <>
      <PageHero id="top" title={site.hero.title} lead={site.hero.lead} images={heroImages}>
        <a href="#classes" className="btn btn--primary">
          Book a Saturday
        </a>
        <a href="#shelf" className="btn btn--ghost">
          See the shelf
        </a>
      </PageHero>
      <Statement>{site.statement}</Statement>
      <Shutter />
      <Firing />
      <Shelf />
      <Classes />
      <Questions />
    </>
  );
}
