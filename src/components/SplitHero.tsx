// Enhanced by AI on 2025-08-15T19:00:49.093Z
// Section: hero
// Category: hero

// components/hero/SplitHero.tsx
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SplitHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Subtle gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
          {/* LEFT: Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
              <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
              New: Handmade Jewelry Collection
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Discover the Beauty of
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Handcrafted Jewelry
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Elevate your style with our exquisite collection of handmade jewelry, crafted with passion and attention to detail.
            </p>

            {/* Feature list */}
            <ul className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                "Unique Designs",
                "Sustainable Materials",
                "Personalized Options",
                "Exceptional Craftsmanship",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/shop">
                <Button size="lg" className="group px-7 text-base">
                  Shop Now
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="text-base">
                  <Play className="mr-2 size-5" /> Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT: Visual */}
          <div className="relative">
            {/* Mockup container */}
            <div className="relative overflow-hidden rounded-2xl border bg-card shadow-2xl">
              <div className="aspect-[16/10] relative">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1920&auto=format&fit=crop"
                  alt="Handmade jewelry collection"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Tag overlay */}
              <div className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium shadow">
                Explore Collection
              </div>
            </div>

            {/* Floating accents */}
            <div className="absolute -right-6 -top-6 hidden w-36 rounded-xl border bg-background/90 p-3 shadow-xl sm:block">
              <p className="text-xs text-muted-foreground">Sustainability</p>
              <p className="text-sm">
                <span className="font-semibold">100%</span> Eco-Friendly
              </p>
            </div>
            <div className="absolute -left-6 -bottom-6 hidden w-36 rounded-xl border bg-background/90 p-3 shadow-xl sm:block">
              <p className="text-xs text-muted-foreground">Craftsmanship</p>
              <p className="text-sm">
                <span className="font-semibold">Handmade</span> in USA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}