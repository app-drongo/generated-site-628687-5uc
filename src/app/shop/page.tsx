import SplitHero from '../../components/SplitHero';
import LinksFooter from '../../components/LinksFooter';

export default function ShopPage() {
  return (
    <main className="min-h-screen">
      <section id="hero" className="scroll-mt-16">
        <SplitHero />
      </section>
      <section id="footer" className="scroll-mt-16">
        <LinksFooter />
      </section>
    </main>
  );
}