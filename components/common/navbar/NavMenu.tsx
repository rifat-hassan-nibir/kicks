"use client";

import { navMenu } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import mobileMenuIcon from "@/public/assets/icons/navbar/mobile-menu.svg";
import searchIcon from "@/public/assets/icons/navbar/Search.svg";
import { useState } from "react";
import SearchButton from "./SearchButton";

export default function NavMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="hidden lg:flex gap-10">
        {navMenu.map((item) => (
          <button key={item.name} className="hover:cursor-pointer">
            <Link href={item.href} className="flex items-center gap-0.5 font-semibold text-[16px]">
              {item.name} {item.icon && <Image src={item.icon} alt="Icon" />}
            </Link>
          </button>
        ))}

        <button className="hover:cursor-pointer lg:hidden block">
          <Image src={searchIcon} alt="Menu" />
        </button>
      </div>

      <div className="lg:hidden flex items-center">
        <button
          className="hover:cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Image src={mobileMenuIcon} alt="Menu" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="flex flex-col gap-4">
            {navMenu.map((item) => (
              <button key={item.name} className="hover:cursor-pointer">
                <Link
                  href={item.href}
                  className="flex items-center gap-0.5 font-semibold text-[16px]"
                >
                  {item.name} {item.icon && <Image src={item.icon} alt="Icon" />}
                </Link>
              </button>
            ))}

            {/* Search Button */}
            <SearchButton />
          </div>
        </div>
      )}
    </>
  );
}
