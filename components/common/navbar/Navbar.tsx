import Image from "next/image";
import NavMenu from "./NavMenu";
import userIcon from "@/public/assets/icons/navbar/User.svg";
import Link from "next/link";
import SearchButton from "./SearchButton";
import CartButton from "./CartButton";

export default function Navbar() {
  return (
    <nav className="body-width lg:p-8 p-4 bg-[#FAFAFA] lg:rounded-3xl rounded-2xl flex justify-between items-center">
      <NavMenu />

      {/* Logo */}
      <Image
        src="/assets/logo/nav-logo-desktop.svg"
        alt="Logo"
        className="lg:w-32 lg:h-8 w-20 h-5"
        width={128}
        height={32}
      />

      {/* Extra Menus */}
      <div className="flex items-center lg:gap-10 gap-2.25 lg:w-75.25 justify-end">
        <div className="lg:block hidden">
          <SearchButton />
        </div>

        {/* User Button */}
        <Link href="#">
          <button className="hover:cursor-pointer flex items-center lg:w-7 lg:h-7 w-4 h-4 gap-0.5 font-semibold text-[16px]">
            <Image src={userIcon} alt="Icon" />
          </button>
        </Link>

        {/* Cart Button */}
        <CartButton />
      </div>
    </nav>
  );
}
