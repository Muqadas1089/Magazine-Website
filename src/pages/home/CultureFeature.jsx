
import { motion } from "framer-motion";
import { FaArrowRight, FaRegClock } from "react-icons/fa6";

const stories = [
  {
    category: "SLOW LIVING",
    title: "The Beauty of Doing Less",
    description:
      "Finding a little more room to breathe, reconnect and appreciate the quieter moments of everyday life.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
    time: "5 MIN READ",
  },
  {
    category: "AT HOME",
    title: "Spaces That Feel Like You",
    description:
      "Thoughtful interiors, personal objects and the little details that make a house feel like home.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
    time: "6 MIN READ",
  },
  {
    category: "DAILY RITUALS",
    title: "A Morning of Your Own",
    description:
      "Simple rituals to bring intention, calm and a fresh perspective to the beginning of your day.",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=900&q=85",
    time: "4 MIN READ",
  },
  {
    category: "TRAVEL NOTES",
    title: "Somewhere New, Something Different",
    description:
      "Discovering places that inspire us to slow down, look closer and see the world differently.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=85",
    time: "7 MIN READ",
  },
];

const Lifestyle = () => {
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
              The Lifestyle Edit
            </p>
          </div>

          <div className="grid items-end gap-8 md:grid-cols-[1fr_280px]">
            <h1 className="font-serif text-6xl leading-[0.9] tracking-tight sm:text-8xl lg:text-[125px]">
              Life,
              <br />
              <span className="italic text-[#8B433F]">
                considered.
              </span>
            </h1>

            <div className="pb-2">
              <p className="font-serif text-2xl leading-snug">
                Live thoughtfully.
                <br />
                <span className="italic text-[#8B433F]">
                  Notice everything.
                </span>
              </p>

              <p className="mt-4 text-sm leading-7 text-[#716A62]">
                Ideas for living well, creating meaningful spaces
                and finding beauty in the everyday.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-between gap-4 border-y border-[#211F1C]/20 py-4">
            <span className="text-[10px] uppercase tracking-[0.25em]">
              ECLIPSE — Life & Living
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8B433F]">
              Interiors / Rituals / Travel
            </span>
          </div>
        </motion.div>
      </section>

      {/* FEATURED STORY */}
      <section className="px-5 sm:px-10 lg:px-16">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="mx-auto grid max-w-7xl md:grid-cols-2"
        >
          <div className="group relative min-h-[400px] overflow-hidden bg-[#EAE3DA] sm:min-h-[600px]">
            <img
              src={stories[0].image}
              alt="Thoughtful and calm living space"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

            <span className="absolute left-5 top-5 bg-[#F8F6F1] px-4 py-3 text-[10px] uppercase tracking-[0.25em]">
              Editor's Selection
            </span>

            <p className="absolute bottom-6 left-6 font-serif text-4xl italic text-white sm:text-5xl">
              Make room for life.
            </p>
          </div>

          <div className="flex flex-col justify-center bg-[#EAE3DA] p-7 sm:p-12 lg:p-16">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#8B433F]">
              {stories[0].category}
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {stories[0].title}
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#716A62]">
              {stories[0].description}
            </p>

            <div className="mt-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#716A62]">
              <FaRegClock />
              {stories[0].time}
            </div>

            <a
              href="#lifestyle-stories"
              className="group mt-8 inline-flex w-fit items-center gap-4 border-b border-[#211F1C] pb-3 text-xs uppercase tracking-[0.2em] hover:text-[#8B433F]"
            >
              Explore the story
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </div>
        </motion.article>
      </section>

      {/* JOURNAL */}
      <section
        id="lifestyle-stories"
        className="px-5 py-20 sm:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5 border-b border-[#211F1C]/20 pb-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#8B433F]">
                A more considered life
              </p>
              <h2 className="font-serif text-4xl sm:text-6xl">
                The Lifestyle Journal
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-7 text-[#716A62]">
              Thoughtful stories about the spaces we create,
              the places we discover and the way we live.
            </p>
          </div>

          <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {stories.slice(1).map((story, index) => (
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
                  {story.time}
                </div>

                <h3 className="mt-4 font-serif text-3xl leading-snug transition-colors group-hover:text-[#8B433F]">
                  {story.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#716A62]">
                  {story.description}
                </p>

                <a
                  href="#lifestyle-stories"
                  className="mt-5 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] hover:text-[#8B433F]"
                >
                  Read the story
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-[#211F1C] px-5 py-20 text-[#F8F6F1] sm:px-10 lg:py-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="mb-7 text-xs uppercase tracking-[0.35em] text-[#C6A15B]">
            The Art of Living
          </p>

          <p className="font-serif text-4xl leading-tight sm:text-6xl lg:text-7xl">
            "A beautiful life is made
            <br />
            <span className="italic text-[#C6A15B]">
              of little things, noticed."
            </span>
          </p>

          <div className="mx-auto mt-9 h-px w-14 bg-[#C6A15B]" />

          <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-white/60">
            The ECLIPSE Perspective
          </p>
        </motion.div>
      </section>

      {/* EXPLORE MORE */}
      <section className="px-5 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 border-b border-[#211F1C]/20 pb-12 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8B433F]">
              Keep exploring
            </p>
            <h2 className="max-w-2xl font-serif text-4xl leading-tight sm:text-6xl">
              Find inspiration in the everyday.
            </h2>
          </div>

          <a
            href="/food"
            className="group inline-flex shrink-0 items-center gap-4 bg-[#8B433F] px-7 py-4 text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#211F1C]"
          >
            Explore Food
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
          </a>
        </div>
      </section>

    </main>
  );
};

export default Lifestyle;
