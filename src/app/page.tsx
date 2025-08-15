import CenteredCta from '../components/CenteredCta';
import CenteredHero from '../components/CenteredHero';
import LinksFooter from '../components/LinksFooter';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section id="cta" className="scroll-mt-16">
        <CenteredCta />
      </section>
      <section id="hero" className="scroll-mt-16">
        <CenteredHero />
      </section>
      <section id="footer" className="scroll-mt-16">
        <LinksFooter />
      </section>
    </main>
  );
}