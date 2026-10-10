import React from "react";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";

const trendingStories = [
  {
    number: "01",
    category: "FASHION",
    title: "A New Language of Dressing",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
    read: "5 MIN READ",
  },
  {
    number: "02",
    category: "CULTURE",
    title: "The Art of Being Different",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=85",
    read: "7 MIN READ",
  },
  {
    number: "03",
    category: "LIFESTYLE",
    title: "A Slower Kind of Luxury",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=85",
    read: "4 MIN READ",
  },
];

const TrendingNow = () => {
  return (
    <section
      id="trending"
      className="overflow-hidden bg-[#f8f6f1] px-5 py-20 text-[#20201e] sm:px-8 sm:py-28 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex items-center justify-between border-b border-black/20 pb-4">
          <p className="text-[9px] font-semibold uppercase tracking-[0.28em]">
            The Independent Magazine
          </p>

          <p className="hidden text-[9px] uppercase tracking-[0.2em] sm:block">
            Fashion · Culture · Life
          </p>

          <p className="text-[9px] font-semibold uppercase tracking-[0.2em]">
            Issue 008
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 items-end gap-6 md:grid-cols-2 lg:mb-16">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a74732]">
              The stories of the moment
            </p>

            <h2 className="font-serif text-6xl leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              In The
              <span className="block pl-[16%] italic text-[#a74732]">
                Spotlight.
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start gap-5 md:items-end">
            <p className="max-w-sm text-sm leading-7 text-black/60 md:text-right">
              The people, ideas, and creative movements capturing
              our attention right now. Selected by our editors.
            </p>

            <a
              href="#trending-stories"
              className="group flex items-center gap-3 border-b border-black/60 pb-2 text-[9px] font-bold uppercase tracking-[0.2em]"
            >
              Explore The Edit
              <FiArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </a>
          </div>
        </div>

        <a
          href="#featured-trending-story"
          className="group relative mb-16 block lg:mb-24"
        >
          <div className="relative grid min-h-[540px] grid-cols-1 overflow-hidden bg-[#e7dfd4] md:min-h-[570px] md:grid-cols-12 lg:min-h-[680px]">
            <div className="relative z-10 flex flex-col justify-between p-6 sm:p-10 md:col-span-5 lg:col-span-4 lg:p-12">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#a74732]" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.22em]">
                    Editor's Choice
                  </p>
                </div>

                <p className="mt-12 font-serif text-5xl leading-[0.98] tracking-tight sm:text-6xl lg:mt-16 lg:text-7xl">
                  Style is
                  <span className="block italic text-[#a74732]">
                    a point
                  </span>
                  <span className="block">of view.</span>
                </p>
              </div>

              <div className="mt-10">
                <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.22em] text-black/50">
                  Fashion / Special Feature
                </p>

                <p className="max-w-xs text-sm leading-7 text-black/65">
                  Meet the new generation redefining personal style
                  through confidence, character, and creative freedom.
                </p>

                <span className="mt-7 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#20201e] text-white transition-all duration-300 group-hover:bg-[#a74732] group-hover:rotate-45">
                  <FiArrowUpRight size={22} />
                </span>
              </div>
            </div>

            <div className="relative min-h-[380px] overflow-hidden md:col-span-7 md:min-h-full md:ml-[-30px] lg:col-span-8">
              <img
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1800&q=90"
                alt="Fashion editorial feature"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent md:bg-gradient-to-r md:from-[#e7dfd4]/10 md:via-transparent md:to-transparent" />

              <span className="absolute right-5 top-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/70 text-white backdrop-blur-sm sm:right-8 sm:top-8">
                <FiArrowUpRight size={23} />
              </span>

              <span className="absolute bottom-5 right-6 font-serif text-7xl italic text-white/90 sm:bottom-8 sm:right-10 sm:text-8xl">
                No. 01
              </span>
            </div>
          </div>
        </a>

        <div id="trending-stories">
          <div className="mb-8 flex items-center justify-between border-b border-black/20 pb-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.24em]">
              More Worth Your Time
            </h3>

            <span className="font-serif text-lg italic text-[#a74732]">
              The Weekly Edit
            </span>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {trendingStories.map((story) => (
              <a
                href={`#trending-${story.number}`}
                key={story.number}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#e7dfd4]">
                  <img
                    src={story.image}
                    alt={story.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 bg-[#f8f6f1] px-3 py-2 text-[9px] font-bold tracking-[0.15em]">
                    {story.number}
                  </span>

                  <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f6f1] transition-colors duration-300 group-hover:bg-[#a74732] group-hover:text-white">
                    <FiArrowUpRight size={19} />
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a74732]">
                    {story.category}
                  </p>

                  <p className="text-[9px] uppercase tracking-[0.15em] text-black/45">
                    {story.read}
                  </p>
                </div>

                <h4 className="mt-3 max-w-sm font-serif text-3xl leading-tight transition-colors duration-300 group-hover:text-[#a74732] sm:text-4xl">
                  {story.title}
                </h4>

                <div className="mt-5 h-px w-full bg-black/20 transition-colors group-hover:bg-[#a74732]" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-5 border-t border-black/20 pt-6 sm:mt-24 sm:flex-row sm:items-center">
          <p className="font-serif text-2xl italic">
            Good stories stay with you.
          </p>

          <a
            href="#all-stories"
            className="group flex w-fit items-center gap-3 text-[9px] font-bold uppercase tracking-[0.2em]"
          >
            View All Stories
            <FiArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;