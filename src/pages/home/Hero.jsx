
import { useEffect, useState } from "react";
import {
  FiArrowDownRight,
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const topics = [
    "FASHION",
    "CULTURE",
    "BEAUTY",
    "LIFESTYLE",
    "FOOD",
    "PERSPECTIVE",
  ];

  const tickerStyle = `
    @keyframes eclipseTicker {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }
  `;

  return (
    <main className="overflow-hidden bg-[#F8F6F1] text-[#211F1C]">
      {/* HERO SECTION */}
      <section className="mx-auto max-w-[1800px] px-4 pb-5 pt-5 sm:px-7 sm:pt-8 lg:px-12">
        {/* Top Editorial Line */}
        <div className="mb-5 flex items-center justify-between gap-3 border-y border-[#211F1C]/20 py-3 sm:mb-7">
          <p className="text-[8px] font-semibold uppercase tracking-[0.2em] sm:text-[10px] sm:tracking-[0.3em]">
            Independent Minds. Distinctive Stories.
          </p>

          <p className="hidden text-[9px] uppercase tracking-[0.2em] text-[#77716B] sm:block">
            The New Editorial Era
          </p>

          <p className="text-[8px] font-medium uppercase tracking-[0.15em] text-[#8B433F] sm:text-[10px] sm:tracking-[0.2em]">
            Vol. 01 — 2026
          </p>
        </div>

        {/* Main Hero Composition */}
        <div className="relative">
          {/* Large Background Image */}
          <div className="group relative min-h-[600px] overflow-hidden bg-[#C8B9A9] sm:min-h-[680px] lg:min-h-[730px]">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2000&q=90"
              alt="Eclipse Magazine fashion editorial portrait"
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover object-[55%_center] transition-transform duration-[1800ms] ease-out group-hover:scale-[1.035]"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#211F1C]/75 via-[#211F1C]/35 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#211F1C]/65 via-transparent to-[#211F1C]/10" />

            {/* Small Top Label */}
            <div className="absolute left-5 right-5 top-5 flex items-start justify-between sm:left-9 sm:right-9 sm:top-8 lg:left-12 lg:right-12">
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#E8C8BA] sm:w-10" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.23em] text-white sm:text-[10px] sm:tracking-[0.3em]">
                  The Eclipse Edition
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-white transition-all duration-300 hover:rotate-45 hover:bg-white hover:text-[#211F1C] sm:h-14 sm:w-14">
                <FiArrowUpRight size={22} />
              </div>
            </div>

            {/* Vertical Editorial Label */}
            <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 rotate-90 sm:block">
              <p className="text-[9px] uppercase tracking-[0.35em] text-white/80">
                Fashion · Culture · Perspective
              </p>
            </div>

            {/* Main Typography */}
            <div
              className={`absolute bottom-0 left-0 right-0 p-5 text-white transition-all duration-1000 sm:p-9 lg:p-14 ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="mb-5 flex items-center gap-3 sm:mb-7">
                <span className="bg-[#8B433F] px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.2em] sm:text-[9px]">
                  Cover Story
                </span>

                <span className="text-[8px] uppercase tracking-[0.2em] text-white/75 sm:text-[9px]">
                  Style That Speaks
                </span>
              </div>

              <h1 className="max-w-5xl font-serif text-[clamp(3.5rem,10.5vw,9.5rem)] leading-[0.79] tracking-[-0.075em]">
                BEYOND
                <br />

                <span className="ml-[5%] inline-block font-normal italic text-[#E8C8BA]">
                  ordinary.
                </span>
              </h1>

              <div className="mt-7 flex flex-col gap-6 border-t border-white/40 pt-5 sm:mt-9 sm:flex-row sm:items-end sm:justify-between sm:pt-7">
                <p className="max-w-md text-xs leading-6 text-white/85 sm:text-sm sm:leading-7">
                  A fresh perspective on fashion, culture and the
                  little things that make life extraordinary.
                </p>

                <a
                  href="/stories/cover-story"
                  className="group flex w-fit items-center gap-5 border border-white/70 px-5 py-4 text-[9px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:border-[#E8C8BA] hover:bg-[#E8C8BA] hover:text-[#211F1C] sm:px-7 sm:py-5"
                >
                  Discover the Story

                  <FiArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>

            {/* Small Issue Marker */}
            <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 sm:right-8 lg:block">
              <span className="block h-12 w-px bg-white/60" />

              <p className="mt-3 text-[8px] uppercase tracking-[0.2em] text-white [writing-mode:vertical-rl]">
                Read Beyond The Surface
              </p>
            </div>
          </div>

          {/* Floating Story Card */}
          <a
            href="/fashion"
            className="group relative z-10 mx-3 -mt-5 flex items-center gap-4 border border-[#211F1C]/10 bg-[#F8F6F1] p-3 shadow-[0_15px_45px_rgba(33,31,28,0.12)] transition-transform duration-500 hover:-translate-y-1 sm:absolute sm:bottom-8 sm:right-5 sm:mx-0 sm:mt-0 sm:max-w-[320px] sm:gap-4 sm:p-4 lg:bottom-12 lg:right-10 lg:max-w-[350px]"
          >
            <div className="h-[92px] w-[88px] shrink-0 overflow-hidden sm:h-[105px] sm:w-[100px]">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=400&q=85"
                alt="Contemporary fashion inspiration"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#8B433F]">
                The Style Report
              </p>

              <h2 className="font-serif text-xl leading-tight sm:text-2xl">
                A New Point of View
              </h2>

              <p className="mt-2 flex items-center gap-2 text-[8px] font-medium uppercase tracking-[0.15em] text-[#77716B]">
                Explore the Edit

                <FiArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </p>
            </div>

            <FiArrowUpRight
              size={17}
              className="self-start text-[#8B433F]"
            />
          </a>
        </div>

        {/* Hero Bottom Information */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#211F1C]/20 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#211F1C]/20">
              <FiArrowDownRight size={16} />
            </span>

            <p className="text-[8px] font-semibold uppercase tracking-[0.2em] sm:text-[9px]">
              Scroll to explore
            </p>
          </div>

          <p className="text-[8px] uppercase tracking-[0.18em] text-[#77716B] sm:text-[9px] sm:tracking-[0.25em]">
            Stories for the curious
          </p>
        </div>
      </section>

      {/* Moving Editorial Ticker */}
      <section className="overflow-hidden border-b border-[#211F1C]/15 py-5">
        <style>{tickerStyle}</style>

        <div
          className="flex w-max items-center"
          style={{
            animation: "eclipseTicker 25s linear infinite",
          }}
          onMouseEnter={(event) => {
            event.currentTarget.style.animationPlayState = "paused";
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.animationPlayState = "running";
          }}
        >
          {[0, 1].map((group) => (
            <div
              key={group}
              aria-hidden={group === 1}
              className="flex shrink-0 items-center"
            >
              {topics.map((topic, index) => (
                <div
                  key={`${group}-${topic}-${index}`}
                  className="flex shrink-0 items-center gap-7 px-5 sm:gap-10 sm:px-8"
                >
                  <span className="whitespace-nowrap font-serif text-2xl italic text-[#8B433F] sm:text-3xl">
                    {topic}
                  </span>

                  <span className="h-2 w-2 shrink-0 rotate-45 bg-[#C6A15B]" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      
    </main>
  );
};

export default Hero;
