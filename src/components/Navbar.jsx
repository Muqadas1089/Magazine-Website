import { useState } from "react";
import {
  FiSearch,
  FiBell,
  FiMail,
  FiMenu,
  FiX,
  FiArrowUpRight,
} from "react-icons/fi";

import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Fashion",
    "In & Out",
    "Food",
    "Beauty",
    "Lifestyle",
  ];

  return (
    <header className="relative z-50 w-full bg-[#F8F6F1] text-[#211F1C]">
      {/* Top announcement strip */}
      <div className="flex items-center justify-center border-b border-[#211F1C]/10 px-4 py-2">
        <p className="text-[9px] font-medium uppercase tracking-[0.25em] sm:text-[10px]">
          Your Daily Dose of Style, Culture & Inspiration
        </p>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12">
        {/* Company Logo */}
        <a
          href="/"
          aria-label="Eclipse Magazine Home"
          className="group flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="Eclipse Magazine"
            className="h-10 w-auto max-w-[150px] object-contain transition-opacity duration-300 group-hover:opacity-80 sm:h-12 sm:max-w-[180px]"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 xl:flex 2xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-")}`}
              className="group relative whitespace-nowrap py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#403D38] transition-colors duration-300 hover:text-[#8B433F]"
            >
              {link}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#8B433F] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          {/* Search */}
          <button
            type="button"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Toggle search"
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300 hover:bg-[#EAE5DC]"
          >
            {searchOpen ? (
              <FiX size={19} strokeWidth={1.5} />
            ) : (
              <FiSearch size={19} strokeWidth={1.5} />
            )}
          </button>

          {/* Contact */}
          <a
            href="/contact"
            aria-label="Contact us"
            className="hidden h-9 w-9 items-center justify-center rounded-full transition-colors duration-300 hover:bg-[#EAE5DC] sm:flex"
          >
            <FiMail size={19} strokeWidth={1.5} />
          </a>

          {/* Notifications */}
          <button
            type="button"
            aria-label="Notifications"
            className="relative flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300 hover:bg-[#EAE5DC]"
          >
            <FiBell size={19} strokeWidth={1.5} />
            <span className="absolute right-[7px] top-[6px] h-1.5 w-1.5 rounded-full bg-[#8B433F]" />
          </button>

          {/* Subscribe */}
          <a
            href="/subscribe"
            className="group hidden items-center gap-2 bg-[#211F1C] px-4 py-3 text-[10px] font-medium uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-[#8B433F] sm:flex"
          >
            Subscribe
            <FiArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-[#EAE5DC] xl:hidden"
          >
            {menuOpen ? <FiX size={21} /> : <FiMenu size={21} />}
          </button>
        </div>
      </div>

      {/* Search Panel */}
      {searchOpen && (
        <div className="border-t border-[#211F1C]/10 px-5 py-5 sm:px-8 lg:px-12">
          <form
            onSubmit={(e) => {
              e.preventDefault();

              const formData = new FormData(e.currentTarget);
              const query = formData.get("search");

              if (query && query.toString().trim()) {
                window.location.href = `/search?q=${encodeURIComponent(
                  query.toString().trim()
                )}`;
              }
            }}
            className="mx-auto flex max-w-3xl items-center gap-3 border-b border-[#211F1C]/40 pb-3"
          >
            <FiSearch
              size={20}
              className="shrink-0 text-[#77716B]"
            />

            <input
              type="search"
              name="search"
              placeholder="Search stories, trends, inspiration..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-[#999188]"
              autoFocus
            />

            <button
              type="submit"
              className="text-[10px] font-semibold uppercase tracking-widest hover:text-[#8B433F]"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="border-t border-[#211F1C]/10 bg-[#F8F6F1] px-5 py-5 xl:hidden">
          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <a
                key={link}
                href={`/${link.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-")}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-[#211F1C]/10 py-4 font-serif text-xl transition-colors hover:text-[#8B433F]"
              >
                <span>{link}</span>

                <span className="text-xs text-[#999188]">
                  0{index + 1}
                </span>
              </a>
            ))}

            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 border-b border-[#211F1C]/10 py-4 text-sm"
            >
              <FiMail size={17} />
              Contact Us
            </a>

            <a
              href="/subscribe"
              className="mt-5 flex items-center justify-center gap-2 bg-[#211F1C] px-5 py-4 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-[#8B433F]"
            >
              Subscribe to Eclipse
              <FiArrowUpRight size={15} />
            </a>
          </div>
        </nav>
      )}

      {/* Bottom editorial line */}
      <div className="h-px w-full bg-[#211F1C]/15" />
    </header>
  );
};

export default Navbar;