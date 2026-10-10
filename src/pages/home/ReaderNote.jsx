
import { motion } from "framer-motion";
import {
  FaHeart,
  FaStar,
  FaBookOpen,
  FaQuoteLeft,
  FaRegBookmark,
  FaArrowRight,
  FaPenNib,
} from "react-icons/fa6";

const notes = [
  {
    number: "01",
    category: "BOOKS & WORDS",
    title: "For the days you need a little escape",
    note: "Some books feel like a warm cup of tea on a rainy afternoon. Keep the ones that make you forget to check your phone.",
    mood: "a little dreamy",
    color: "bg-[#F4E7E2]",
    rotate: "-rotate-2",
    icon: "✿",
  },
  {
    number: "02",
    category: "LITTLE REMINDERS",
    title: "Romanticize the ordinary",
    note: "Wear your favourite outfit. Buy yourself flowers. Play that song again. Your everyday life deserves a little magic, too.",
    mood: "soft living",
    color: "bg-[#EEE8F5]",
    rotate: "rotate-1",
    icon: "♡",
  },
  {
    number: "03",
    category: "FILM & FEELINGS",
    title: "A story worth staying up for",
    note: "The best films don't always have perfect endings. Sometimes they simply leave you thinking about a scene long after the credits roll.",
    mood: "for the cinephile",
    color: "bg-[#F5EEDB]",
    rotate: "-rotate-1",
    icon: "✧",
  },
  {
    number: "04",
    category: "ART & INSPIRATION",
    title: "Collect things that move you",
    note: "A line from a poem, a beautiful colour, an unexpected conversation. Inspiration often arrives quietly. Leave a little room for it.",
    mood: "creative thoughts",
    color: "bg-[#E5EEE7]",
    rotate: "rotate-2",
    icon: "❀",
  },
];

const favourites = [
  {
    title: "A book that stays",
    description: "For the stories that find a permanent little home in your heart.",
    symbol: "✷",
  },
  {
    title: "A film to remember",
    description: "For beautiful frames, complicated feelings and unforgettable endings.",
    symbol: "♡",
  },
  {
    title: "An idea to keep",
    description: "For the tiny sparks that turn an ordinary day into something special.",
    symbol: "✿",
  },
];

export default function Reviews() {
  return (
    <main className="overflow-hidden bg-[#F8F6F1] text-[#211F1C]">
      {/* HERO */}
      <section className="relative px-5 pb-20 pt-24 sm:px-10 sm:pb-28 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#8B433F]/20 px-5 py-2 text-[10px] uppercase tracking-[0.3em] text-[#8B433F]">
            <FaPenNib />
            A little corner of the magazine
          </div>

          <p className="mb-3 font-serif text-lg italic text-[#8B433F] sm:text-xl">
            Dear reader, this one's for you
          </p>

          <h1 className="font-serif text-6xl leading-[0.95] tracking-tight sm:text-8xl md:text-9xl">
            Read <span className="italic text-[#8B433F]">Notes.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#716A62] sm:text-base sm:leading-8">
            Little thoughts, lovely discoveries and things worth keeping.
            Think of this as a tiny notebook filled with stories, feelings
            and favourites we just had to share.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-[#8B433F]">
            <FaHeart className="text-xs" />
            <span className="font-serif italic">Read slowly. Feel everything.</span>
            <FaHeart className="text-xs" />
          </div>
        </motion.div>

        <span className="absolute left-[8%] top-28 rotate-[-15deg] font-serif text-4xl text-[#C6A15B]">
          ✳
        </span>
        <span className="absolute right-[10%] top-44 rotate-12 font-serif text-4xl text-[#8B433F]">
          ♡
        </span>
        <span className="absolute bottom-12 left-[16%] font-serif text-3xl text-[#C6A15B]">
          ✧
        </span>
        <span className="absolute bottom-16 right-[15%] font-serif text-3xl text-[#8B433F]">
          ✿
        </span>
      </section>

      {/* NOTEBOOK INTRO */}
      <section className="border-y border-[#211F1C]/10 bg-[#F1EAE0] px-5 py-12 sm:px-10 sm:py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#8B433F]">
              From our little notebook
            </p>
            <h2 className="font-serif text-3xl leading-tight sm:text-5xl">
              Not everything needs a rating.
              <br />
              <span className="italic text-[#8B433F]">
                Some things just need a note.
              </span>
            </h2>
          </div>

          <div className="flex h-24 w-24 shrink-0 rotate-6 flex-col items-center justify-center rounded-full border border-[#8B433F]/30 text-center text-[#8B433F]">
            <FaBookOpen className="mb-2 text-xl" />
            <span className="text-[9px] uppercase tracking-[0.2em]">
              Keep reading
            </span>
          </div>
        </div>
      </section>

      {/* NOTE CARDS */}
      <section className="px-5 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#8B433F]">
                Pages from our diary
              </p>
              <h2 className="font-serif text-4xl sm:text-6xl">
                Notes to <span className="italic">keep.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[#716A62]">
              A collection of little things we love, thoughts we had and
              favourites we think you'll love, too.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2">
            {notes.map((note, index) => (
              <motion.article
                key={note.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={`${note.color} ${note.rotate} group relative flex min-h-[300px] flex-col justify-between border border-[#211F1C]/5 p-7 shadow-[0_12px_35px_rgba(33,31,28,0.04)] transition duration-300 hover:rotate-0 hover:shadow-[0_18px_45px_rgba(33,31,28,0.10)] sm:min-h-[330px] sm:p-10`}
              >
                <div className="absolute right-6 top-5 font-serif text-3xl text-[#8B433F]/60">
                  {note.icon}
                </div>

                <div>
                  <div className="mb-7 flex items-center justify-between gap-4">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#8B433F]">
                      {note.category}
                    </span>
                    <span className="font-serif text-sm italic text-[#716A62]">
                      No. {note.number}
                    </span>
                  </div>

                  <h3 className="max-w-sm font-serif text-3xl leading-tight sm:text-4xl">
                    {note.title}
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-[#514943]">
                    {note.note}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-[#211F1C]/15 pt-5">
                  <span className="font-serif text-sm italic text-[#8B433F]">
                    {note.mood}
                  </span>
                  <FaRegBookmark className="text-sm text-[#8B433F] transition-transform group-hover:-translate-y-1" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-[#8B433F] px-5 py-20 text-[#F8F6F1] sm:px-10 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <FaQuoteLeft className="mx-auto mb-8 text-2xl text-[#E7CDA0]" />

          <p className="font-serif text-3xl leading-snug sm:text-5xl sm:leading-tight">
            "Keep the things that make you feel a little more alive."
          </p>

          <div className="mx-auto mt-8 h-px w-14 bg-[#E7CDA0]" />

          <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-[#F1DDD2]">
            A note from ECLIPSE
          </p>
        </motion.div>
      </section>

      {/* LITTLE FAVOURITES */}
      <section className="px-5 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#8B433F]">
              Things worth loving
            </p>
            <h2 className="font-serif text-4xl sm:text-6xl">
              Our little <span className="italic">favourites.</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {favourites.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-[#211F1C]/10 bg-white/50 p-7 text-center transition-colors hover:bg-[#F1EAE0] sm:p-9"
              >
                <span className="font-serif text-4xl text-[#8B433F]">
                  {item.symbol}
                </span>

                <h3 className="mt-5 font-serif text-2xl">{item.title}</h3>

                <p className="mt-4 text-sm leading-7 text-[#716A62]">
                  {item.description}
                </p>

                <div className="mt-6 flex justify-center gap-1 text-xs text-[#C6A15B]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-24 sm:px-10 sm:pb-32">
        <div className="mx-auto max-w-4xl border border-[#8B433F]/20 bg-[#F1EAE0] px-6 py-14 text-center sm:px-12 sm:py-20">
          <span className="font-serif text-4xl text-[#8B433F]">♡</span>

          <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-[#8B433F]">
            Before you go
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">
            Take a little
            <br />
            <span className="italic text-[#8B433F]">loveliness with you.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#716A62]">
            There's always another story, another thought and another
            little discovery waiting for you at ECLIPSE.
          </p>

          <a
            href="/culture"
            className="group mt-8 inline-flex items-center gap-3 bg-[#211F1C] px-7 py-4 text-[10px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#8B433F]"
          >
            Explore Culture
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>

          <p className="mt-8 font-serif text-sm italic text-[#8B433F]">
            Made with a little love, always.
          </p>
        </div>
      </section>
    </main>
  );
}
