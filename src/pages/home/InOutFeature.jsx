
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const trendGroups = [
  {
    label: "01 / THE MOOD",
    title: "Dressing with Intention",
    subtitle: "FASHION",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
    inItems: [
      "Personal style",
      "Thoughtful layering",
      "Timeless essentials",
      "Unexpected combinations",
    ],
    outItems: [
      "Buying every passing trend",
      "Style without personality",
      "Disposable wardrobes",
      "Dressing by rules alone",
    ],
  },
  {
    label: "02 / THE RITUAL",
    title: "Beauty, Simplified",
    subtitle: "BEAUTY",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
    inItems: [
      "Simple daily rituals",
      "Natural-looking finishes",
      "Personal expression",
      "Less complicated routines",
    ],
    outItems: [
      "Overcomplicated routines",
      "One-size-fits-all beauty",
      "Following every viral hack",
      "Unnecessary excess",
    ],
  },
  {
    label: "03 / THE LIFESTYLE",
    title: "Making Space for More",
    subtitle: "LIFESTYLE",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
    inItems: [
      "Intentional living",
      "Comfortable personal spaces",
      "Slow mornings",
      "Experiences over clutter",
    ],
    outItems: [
      "Constant rushing",
      "Clutter without purpose",
      "Overpacked schedules",
      "Living only for appearances",
    ],
  },
];

const InOut = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F6F1] text-[#211F1C]">
      {/* HERO */}
      <section className="px-5 pb-12 pt-16 sm:px-10 lg:px-16 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#8B433F]" />
            <p className="text-xs uppercase tracking-[0.35em] text-[#8B433F]">
              The Culture Index
            </p>
          </div>

          {/* UPDATED HERO SPACING */}
          <div className="grid items-end gap-12 md:grid-cols-[1fr_320px] lg:gap-20 xl:grid-cols-[1fr_340px]">
            <h1 className="font-serif text-6xl leading-[0.88] tracking-tight sm:text-8xl lg:pr-12 lg:text-[130px]">
              In
              <span className="italic text-[#8B433F]">.</span>
              <br />
              Out
              <span className="italic text-[#8B433F]">.</span>
            </h1>

            <div className="pb-2 md:ml-2">
              <p className="font-serif text-2xl leading-snug">
                Know the mood.
                <br />
                <span className="italic text-[#8B433F]">
                  Define your own.
                </span>
              </p>

              <p className="mt-4 text-sm leading-7 text-[#716A62]">
                The ideas, habits and aesthetics shaping the conversation.
                Keep what feels right. Leave what doesn't.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-between gap-4 border-y border-[#211F1C]/20 py-4">
            <span className="text-[10px] uppercase tracking-[0.25em]">
              ECLIPSE — The Trend Report
            </span>

            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8B433F]">
              In / Out / Your Perspective
            </span>
          </div>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="px-5 py-8 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto grid max-w-7xl gap-8 border-b border-[#211F1C]/20 pb-10 md:grid-cols-[1fr_1fr]"
        >
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
            Trends come and go.
            <br />
            <span className="italic text-[#8B433F]">
              Taste is personal.
            </span>
          </h2>

          <p className="max-w-xl self-end text-sm leading-7 text-[#716A62]">
            Our In & Out edit explores changing moods across fashion,
            beauty and everyday living. These are conversation starters,
            not rules. Take inspiration, make it yours and remember:
            your personal taste always comes first.
          </p>
        </motion.div>
      </section>

      {/* TREND CARDS */}
      <section className="px-5 py-12 sm:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-7xl space-y-16">
          {trendGroups.map((group, index) => (
            <motion.article
              key={group.subtitle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.7 }}
              className="grid gap-0 border-b border-[#211F1C]/20 pb-16 lg:grid-cols-[0.8fr_1.2fr]"
            >
              {/* IMAGE */}
              <div className="group relative min-h-[330px] overflow-hidden bg-[#EAE3DA] sm:min-h-[480px]">
                <img
                  src={group.image}
                  alt={group.title}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

                <span className="absolute left-5 top-5 bg-[#F8F6F1] px-4 py-3 text-[10px] uppercase tracking-[0.25em]">
                  {group.subtitle}
                </span>

                <p className="absolute bottom-6 left-6 font-serif text-3xl italic text-white sm:text-4xl">
                  {group.label}
                </p>
              </div>

              {/* IN / OUT CONTENT */}
              <div className="bg-[#EAE3DA] p-6 sm:p-10 lg:p-12">
                <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#8B433F]">
                  {group.subtitle} / THE EDIT
                </p>

                <h2 className="mb-8 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                  {group.title}
                </h2>

                <div className="grid gap-8 sm:grid-cols-2">
                  {/* IN */}
                  <div>
                    <div className="mb-5 flex items-center gap-3 border-b border-[#8B433F]/40 pb-4">
                      <span className="flex h-9 w-9 items-center justify-center bg-[#8B433F] font-serif text-lg italic text-white">
                        +
                      </span>

                      <h3 className="font-serif text-2xl">
                        What's In
                      </h3>
                    </div>

                    <ul className="space-y-4">
                      {group.inItems.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-6 text-[#39332E]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B433F]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* OUT */}
                  <div>
                    <div className="mb-5 flex items-center gap-3 border-b border-[#211F1C]/20 pb-4">
                      <span className="flex h-9 w-9 items-center justify-center border border-[#211F1C]/30 font-serif text-lg italic">
                        −
                      </span>

                      <h3 className="font-serif text-2xl">
                        What's Out
                      </h3>
                    </div>

                    <ul className="space-y-4">
                      {group.outItems.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-6 text-[#716A62]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#716A62]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-9 border-t border-[#211F1C]/15 pt-5">
                  <p className="text-xs italic leading-6 text-[#716A62]">
                    The ECLIPSE note: trends are inspiration, not instructions.
                    Choose what works for you.
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="bg-[#211F1C] px-5 py-20 text-[#F8F6F1] sm:px-10 lg:py-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="mb-7 text-xs uppercase tracking-[0.35em] text-[#C6A15B]">
            The Final Word
          </p>

          <p className="font-serif text-4xl leading-tight sm:text-6xl lg:text-7xl">
            Follow the conversation.
            <br />
            <span className="italic text-[#C6A15B]">
              Never lose your point of view.
            </span>
          </p>

          <div className="mx-auto mt-9 h-px w-14 bg-[#C6A15B]" />

          <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-white/60">
            ECLIPSE — In & Out
          </p>
        </motion.div>
      </section>

      {/* BACK TO EDITORIAL */}
      <section className="px-5 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8B433F]">
              Your next read
            </p>

            <h2 className="max-w-2xl font-serif text-4xl leading-tight sm:text-6xl">
              Stay curious. Stay individual.
            </h2>
          </div>

          <a
            href="/fashion"
            className="group inline-flex shrink-0 items-center gap-4 bg-[#8B433F] px-7 py-4 text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#211F1C]"
          >
            Explore Fashion
            <FaArrowUpRightFromSquare className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default InOut;
