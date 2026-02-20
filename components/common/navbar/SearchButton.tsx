import Image from "next/image";
import searchIcon from "@/public/assets/icons/navbar/Search.png";

export default function SearchButton() {
  return (
    <button className="hover:cursor-pointer lg:w-7 lg:h-7 w-4 h-4 flex items-center gap-0.5 font-semibold text-[16px]">
      <Image src={searchIcon} alt="Icon" />
    </button>
  );
}
