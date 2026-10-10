
import { motion } from "framer-motion";
import { FaArrowRight, FaRegClock } from "react-icons/fa6";

const beautyStories = [
  {
    category: "SKINCARE",
    title: "The Art of Effortless, Glowing Skin",
    description:
      "Discover the beauty rituals that celebrate natural skin and timeless simplicity.",
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1000&q=85",
    readTime: "5 MIN READ",
    size: "large",
  },
  {
    category: "MAKEUP",
    title: "A Touch of Burgundy",
    description:
      "The rich, understated shade bringing a new mood to modern beauty.",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85",
    readTime: "4 MIN READ",
  },
  {
    category: "BEAUTY NOTES",
    title: "Less, But Better",
    description:
      "A thoughtful approach to everyday beauty essentials.",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
    readTime: "6 MIN READ",
  },
];

const Beauty = () => {
  return (
    <main className="min-h-screen bg-[#F8F6F1] text-[#211F1C]">

      {/* HERO */}
      <section className="px-5 pb-12 pt-16 sm:px-10 lg:px-16 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#8B433F]" />
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#8B433F]">
              The Beauty Edit
            </p>
          </div>

          <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
            <h1 className="max-w-4xl font-serif text-6xl leading-[0.95] tracking-tight sm:text-7xl lg:text-9xl">
              Beauty,
              <br />
              <span className="italic text-[#8B433F]">
                beyond
              </span>{" "}
              the surface.
            </h1>

            <p className="max-w-xs pb-2 text-sm leading-7 text-[#716A62]">
              A considered look at modern beauty, thoughtful rituals,
              timeless details and the art of feeling like yourself.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-y border-[#211F1C]/20 py-4">
            <p className="text-[10px] uppercase tracking-[0.25em]">
              Issue No. 04 — The Beauty Issue
            </p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#8B433F]">
              Skin · Makeup · Rituals
            </p>
          </div>
        </motion.div>
      </section>

      {/* FEATURED STORY */}
      <section className="px-5 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="mx-auto grid max-w-7xl overflow-hidden bg-[#EAE3DA] md:grid-cols-2"
        >
          <div className="group relative min-h-[350px] overflow-hidden sm:min-h-[480px]">
            <img
              src={beautyStories[0].image}
              alt="Beauty skincare editorial"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5" />
            <span className="absolute left-5 top-5 bg-[#F8F6F1] px-4 py-2 text-[10px] uppercase tracking-[0.25em]">
              Editor's Pick
            </span>
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#8B433F]">
              {beautyStories[0].category}
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {beautyStories[0].title}
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#716A62]">
              {beautyStories[0].description}
            </p>

            <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#716A62]">
              <FaRegClock />
              {beautyStories[0].readTime}
            </div>

            <a
              href="#beauty-stories"
              className="group mt-8 inline-flex w-fit items-center gap-4 border-b border-[#211F1C] pb-2 text-xs uppercase tracking-[0.2em] transition-colors hover:text-[#8B433F]"
            >
              Explore the story
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* EDITORIAL STORIES */}
      <section
        id="beauty-stories"
        className="px-5 py-20 sm:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5 border-b border-[#211F1C]/20 pb-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#8B433F]">
                Curated for you
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl">
                The Beauty Journal
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-6 text-[#716A62]">
              New perspectives, considered essentials and stories worth
              slowing down for.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {beautyStories.map((story, index) => (
              <motion.article
                key={story.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: index * 0.12 }}
                className="group"
              >
                <div className="relative mb-6 aspect-[4/5] overflow-hidden bg-[#EAE3DA]">
                  <img
                    src={story.image}
                    alt={story.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 bg-[#F8F6F1] px-3 py-2 text-[9px] uppercase tracking-[0.2em]">
                    {story.category}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#8B433F]">
                  <FaRegClock />
                  {story.readTime}
                </div>

                <h3 className="mt-4 font-serif text-3xl leading-snug transition-colors duration-300 group-hover:text-[#8B433F]">
                  {story.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#716A62]">
                  {story.description}
                </p>

                <a
                  href="#beauty-stories"
                  className="mt-5 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] hover:text-[#8B433F]"
                >
                  Read article
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* BEAUTY QUOTE */}
      <section className="bg-[#211F1C] px-5 py-20 text-[#F8F6F1] sm:px-10 lg:py-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#C6A15B]">
            A Note on Beauty
          </p>

          <p className="font-serif text-4xl leading-tight sm:text-6xl">
            "True beauty lives in the details we choose to notice."
          </p>

          <div className="mx-auto mt-8 h-px w-14 bg-[#C6A15B]" />

          <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-white/60">
            The ECLIPSE Perspective
          </p>
        </motion.div>
      </section>

      {/* NEWSLETTER */}
      <section className="px-5 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl border-y border-[#211F1C]/20 py-12 text-center sm:py-16">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8B433F]">
            The ECLIPSE Letter
          </p>

          <h2 className="font-serif text-4xl sm:text-6xl">
            A little beauty in your inbox.
          </h2>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#716A62]">
            Discover thoughtful stories, fresh perspectives and the
            latest from our editorial desk.
          </p>

          <a
            href="mailto:hello@eclipsemagazine.com?subject=ECLIPSE%20Beauty%20Newsletter"
            className="mt-8 inline-flex items-center gap-4 bg-[#8B433F] px-7 py-4 text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-[#211F1C]"
          >
            Stay in the loop
            <FaArrowRight />
          </a>
        </div>
      </section>

    </main>
  );
};

export default Beauty;
