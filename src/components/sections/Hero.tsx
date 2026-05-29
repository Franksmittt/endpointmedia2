import Image from "next/image";
import HeroWhatsAppLink from "@/components/sections/HeroWhatsAppLink";

const HERO_BG_SRC = "/images/hero-bg-optimized.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-charcoal via-charcoal-dark to-charcoal text-white h-screen flex items-center overflow-hidden pt-16 pb-8"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.15) 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="absolute inset-0 z-0">
        <div className="md:hidden h-full w-full bg-gradient-to-br from-charcoal via-charcoal/80 to-teal-900/40" />
        <Image
          src={HERO_BG_SRC}
          alt="Endpoint Media - Premium web design and digital marketing services for Johannesburg businesses. High-performance websites that generate leads and dominate local search results."
          fill
          quality={80}
          className="hidden md:block object-cover opacity-15"
          sizes="(max-width: 1023px) 0px, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/80 to-teal-900/40" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 z-10 relative text-center flex flex-col justify-center h-full">
        <h1
          id="hero-headline"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-4 md:mb-6 text-white"
        >
          We Don&apos;t Sell Cheap Websites.
          <br />
          <span className="text-teal-400">We Engineer Market Domination.</span>
        </h1>

        <p
          id="hero-summary"
          className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-gray-200 mb-4 md:mb-6"
        >
          We take a <strong className="text-white font-semibold">handful of clients</strong> who are serious about growth.
          We dissect every millimeter of your business, your market, and your competitors.
          We don&apos;t build websites. We architect{" "}
          <strong className="text-teal-400 font-semibold">competitive advantages</strong> that put you completely above anyone else in your market.
        </p>

        <p
          className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-gray-300 mb-6 md:mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          We&apos;d rather have <strong className="text-white">10 clients who dominate</strong> than 100 who just become a number.
          Your success isn&apos;t optional. It&apos;s our only metric.
        </p>

        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#audit"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-extrabold py-3 px-8 md:py-4 md:px-12 rounded-lg shadow-2xl shadow-teal-500/30 border-2 border-teal-400/50 transform hover:scale-105 transition-all duration-300 ease-in-out uppercase text-sm md:text-base tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal focus-visible:ring-teal-300"
          >
            Get Your Free Architecture Audit
          </a>
        </div>

        <div className="mt-3 md:mt-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <HeroWhatsAppLink />
        </div>
      </div>
    </section>
  );
}
