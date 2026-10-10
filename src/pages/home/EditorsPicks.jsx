import React, { useState } from 'react';

export default function FeaturedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      category: 'FASHION',
      tagColor: 'bg-[#8c3d22]',
      title: 'Structural Elegance: Minimalist Tailoring in Contemporary Haute Couture',
      description: 'An in-depth look into how sculptural silhouettes and sustainable raw linen are redefining modern luxury wardrobes across Europe.',
      author: 'Evelyn Vane',
      date: 'Oct 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    },
    {
      category: 'BEAUTY',
      tagColor: 'bg-amber-700',
      title: 'Botanical Alchemy: The Rise of Bio-Fermented Skincare Formulations',
      description: 'Exploring molecular bio-tech ingredients harvested from coastal flora to deliver ultra-potent skin regeneration.',
      author: 'Dr. Clara Thorne',
      date: 'Oct 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    },
    {
      category: 'FOOD',
      tagColor: 'bg-amber-800',
      title: 'Fermentation & Fire: The Renaissance of Nordic Open-Flame Gastronomy',
      description: 'How avant-garde chefs are combining ancient smoke preservation techniques with hyper-seasonal foraging.',
      author: 'Marcus Lind',
      date: 'Sep 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    },
    {
      category: 'IN & OUT',
      tagColor: 'bg-[#8c3d22]',
      title: 'Monolithic Havens: Earth & Concrete Architecture in Suburban Landscapes',
      description: 'Reimagining residential sanctuaries through raw terracotta brickwork, natural acoustics, and thermal massing.',
      author: 'Soren Vance',
      date: 'Sep 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    },
    {
      category: 'LIFESTYLE',
      tagColor: 'bg-neutral-700',
      title: 'Analog Rituals: Why High-End Audiophiles Are Returning to Custom Vinyl',
      description: 'Inside the bespoke listening lounges where tactile music interaction takes center stage over digital streams.',
      author: 'Julian Mercer',
      date: 'Aug 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full bg-[#1e2227] text-amber-100 py-12 px-4 sm:px-6 lg:px-8 border-b border-neutral-800 font-serif">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 pb-4 border-b border-neutral-800 gap-4">
          <div>
            <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#8c3d22] uppercase block mb-1">
              Curated Selection
            </span>
            <h2 className="text-2xl sm:text-3xl font-light tracking-wide text-amber-100 uppercase">
              Spotlight Stories
            </h2>
          </div>

          {/* Flickity Navigation Controls */}
          <div className="flex items-center space-x-3 font-sans">
            <span className="text-xs text-neutral-400 font-mono tracking-wider mr-2">
              0{activeIndex + 1} / 0{slides.length}
            </span>
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="p-3 rounded-full border border-neutral-700 bg-neutral-900/60 hover:bg-[#8c3d22] hover:border-[#8c3d22] text-amber-100 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="p-3 rounded-full border border-neutral-700 bg-neutral-900/60 hover:bg-[#8c3d22] hover:border-[#8c3d22] text-amber-100 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Tracks Container */}
        <div className="overflow-hidden relative rounded-xl">
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{ transform: `translateX(-${activeIndex * (100 / 1.15)}%)` }}
          >
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className="w-[85%] sm:w-[60%] lg:w-[45%] shrink-0 group cursor-pointer"
              >
                <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl overflow-hidden flex flex-col justify-between h-full hover:border-neutral-700 transition-colors duration-300">
                  
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-[10px] font-sans font-bold tracking-widest uppercase text-amber-100 rounded-full ${slide.tagColor}`}>
                        {slide.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center space-x-2 text-[11px] font-sans text-neutral-400 mb-2">
                        <span>{slide.author}</span>
                        <span>&bull;</span>
                        <span>{slide.date}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-normal leading-snug text-amber-100 group-hover:text-amber-200 transition-colors duration-200 mb-3">
                        {slide.title}
                      </h3>

                      <p className="text-xs font-sans text-neutral-400 line-clamp-2 leading-relaxed mb-6">
                        {slide.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-sans">
                      <span className="text-neutral-500 text-[11px]">{slide.readTime}</span>
                      <div className="flex items-center gap-1 font-semibold text-amber-200 group-hover:translate-x-1 transition-transform duration-300">
                        <span>Read Article</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Pagination Bar */}
        <div className="mt-8 flex justify-center items-center space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-8 bg-[#8c3d22]' : 'w-2 bg-neutral-700 hover:bg-neutral-500'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}