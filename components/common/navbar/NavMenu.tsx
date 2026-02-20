"use client";

import { navMenu } from "@/constants";
import mobileMenuIcon from "@/public/assets/icons/navbar/mobile-menu.png";
import searchIcon from "@/public/assets/icons/navbar/Search.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="hidden lg:flex gap-10">
        {navMenu.map((item) => (
          <button
            key={item.name}
            className="hover:cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <Link
              href={item.href}
              className="flex items-center gap-0.5 font-semibold text-[16px] text-dark-gray"
            >
              {item.name} {item.icon && <Image src={item.icon} alt="Icon" />}
            </Link>
          </button>
        ))}
      </div>

      <div className="lg:hidden flex items-center">
        <button
          className="hover:cursor-pointer transition-transform active:scale-90"
          onClick={toggleMenu}
          aria-label="Open Mobile Menu"
        >
          <Image src={mobileMenuIcon} alt="Menu" />
        </button>
      </div>

      {/* Slide Menu for Mobile */}
      <div
        className={`fixed inset-0 z-100 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop overlay */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleMenu}
        />

        {/* Sidebar content */}
        <div
          className={`absolute left-0 top-0 h-full w-[85%] max-w-[320px] bg-[#FAFAFA] p-6 shadow-2xl transition-transform duration-500 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full gap-6">
            <div className="flex justify-between items-center">
              <Link href="/" onClick={toggleMenu}>
                <Image src="/assets/logo/nav-logo-desktop.png" alt="Logo" width={100} height={25} />
              </Link>
              <button
                onClick={toggleMenu}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-100 shadow-sm hover:bg-gray-50 transition-colors active:scale-90"
                aria-label="Close menu"
              >
                <span className="text-xl font-light text-dark-gray">✕</span>
              </button>
            </div>

            {/* Search Input Bar */}
            <div className="relative group">
              <input
                type="text"
                placeholder="Search kicks..."
                className="w-full bg-white border border-gray-100 rounded-xl py-3 pl-11 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-dark-gray placeholder:text-gray-400"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <Image
                  src={searchIcon}
                  alt="Search"
                  width={18}
                  height={18}
                  className="opacity-40 group-focus-within:opacity-100 transition-opacity"
                />
              </div>
            </div>

            <nav className="flex flex-col gap-1">
              {navMenu.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={toggleMenu}
                  className={`flex items-center justify-between p-2.5 rounded-xl hover:bg-white transition-all duration-200 text-[14px] font-bold text-dark-gray transform ${
                    isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.name}
                  {item.icon && (
                    <Image src={item.icon} alt="Icon" className="-rotate-90 opacity-50" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="mt-auto border-t border-gray-200 pt-6 pb-2">
              <p className="text-gray-400 text-[10px] text-center font-bold uppercase tracking-widest">
                © 2026 Kicks Store
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
